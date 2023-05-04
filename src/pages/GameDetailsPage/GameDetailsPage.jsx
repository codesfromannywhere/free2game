import React from 'react';
import style from './GameDetailsPage.module.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import Components
import GenericLink from '../../components/buttons/GenericLink';
import HeroSection from '../../components/HeroSection';
import FilterTag from '../../components/FilterTag';

// _______________________________________________________________________

const GameDetailsPage = () => {

	const params = useParams();
	const gameId = params.id;

	const [gameDetails, setGameDetails] = useState({
		id: "loading",
		genre: "loading",
		title: "loading",
		thumbnail: "loading",
		description: "loading",
		developer: "loading",
		publisher: "loading",
		platform: "loading",
		release_date: "loading",
		freetogame_profile_url: "loading",
		minimum_system_requirements: {
			os: "loading",
			processor: "loading",
			memory: "loading",
			graphics: "loading",
			storage: "loading",
		},
		screenshots: [{ image: "loading" }, { image: "loading" }, { image: "loading" }],
	});

	useEffect(() => {
		fetch(`https://www.freetogame.com/api/game?id=${gameId}`)
			.then(res => res.json())
			.then(data => {
				setGameDetails(data);
			})
	}, [gameId])

	// Format the Release Date (from 20??-??-?? to Month ??, 20??)__________________
	const dateString = gameDetails.release_date;
	const dateObj = new Date(dateString);

	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	const month = dateObj.getMonth();
	const year = dateObj.getFullYear();
	const day = dateObj.getDate();

	const fixedReleaseDate = `${monthNames[month]} ${day}, ${year}`;

	// RETURN_______________________________________________________________________

	return (
		<main className={style.gameDetailsPage}>
			{gameDetails.screenshots[0]?.image && (
				<section className={style.heroSection}>
					<HeroSection backgroundImage={gameDetails.screenshots[0]?.image} />
				</section>
			)}
			<h2>{gameDetails.title.toUpperCase()}</h2>
			<article className={style.article}>
				<div className={style.thumbnail_button_article}>
					<img src={gameDetails.thumbnail} alt={`thumbnail ${gameDetails.title}`} />
					<h3>Platform: {gameDetails.platform}</h3>
					<FilterTag className={style.Game_tag} text={gameDetails.genre} />
					<GenericLink className={style.Link_playnow} to={gameDetails.freetogame_profile_url}>PLAY NOW</GenericLink>
				</div>
				<div className={style.about_text_div}>
					<h3>About</h3>
					<p>{gameDetails.description}</p>
				</div>
			</article>
			{gameDetails.screenshots[0]?.image && (
				<section className={style.screenshot_section}>
					<img src={gameDetails.screenshots[1]?.image} alt="Screenshot 2" />
					<img src={gameDetails.screenshots[2]?.image} alt="Screenshot 3" />
				</section>
			)}
			<article className={style.main_article_system}>
				<article className={style.information}>
					<h3 className={style.headline}>Additional Information</h3>
					<p>Please note this free-to-play game may or may not offer optional in-game purchases.</p>
					<div className={style.developer_block}>
						<div>
							<h3>Developer</h3>
							<h3>Publisher</h3>
							<h3>Release Date</h3>
						</div>
						<div>
							<p>{gameDetails.developer}</p>
							<p>{gameDetails.publisher}</p>
							<p>{fixedReleaseDate}</p>
						</div>
					</div>
				</article>
				{gameDetails.minimum_system_requirements?.os && gameDetails.minimum_system_requirements?.processor && (
					<article className={style.requirements_article}>
						<h3 className={style.headline}>Minimum System Requirements</h3>
						<div className={style.system_block_div}>
							<div className={style.os_memory_storage}>
								<h3>OS</h3>
								<p>{gameDetails.minimum_system_requirements?.os}</p>
								<h3>Memory</h3>
								<p>{gameDetails.minimum_system_requirements?.memory}</p>
								<h3>Storage</h3>
								<p>{gameDetails.minimum_system_requirements?.storage}</p>
							</div>
							<div className={style.processor_graphics_notes}>
								<h3>Processor</h3>
								<p>{gameDetails.minimum_system_requirements?.processor}</p>
								<h3>Graphics</h3>
								<p>{gameDetails.minimum_system_requirements?.graphics}</p>
								<h3>Additional Notes</h3>
								<p>Specifications may change during development</p>
							</div>
						</div>
					</article>
				)}
			</article>
		</main>
	);
};

export default GameDetailsPage;