import React from 'react';
import style from './RecentlyAddedPage.module.scss';
import { useState, useEffect } from 'react';
import RecentListItem from '../../components/recentlyAdded/RecentListItem';
import GameItem_EX from '../../components/experimental/GameItem_EX';
import HeroSection from '../../components/HeroSection';
import image from '../../assets/images/logo.svg';

const RecentlyAddedPage = () => {

	const [recentlyAdded, setRecentlyAdded] = useState([]);

	useEffect(() => {

		fetch('https://www.freetogame.com/api/games?sort-by=release-date')
			.then((res) => res.json())
			.then((data) => setRecentlyAdded(data))
	}, []);

	console.log(recentlyAdded);


	return (
		<main className={style.recentlyAddedPage}>
			{/* {recentlyAdded.map((game) => (
				<RecentListItem
					key={game.id}
					image={game.thumbnail}
					title={game.title}
					platform={game.platform}
					genre={game.genre}
				/>
			))} */}
			<HeroSection title="RECENTLY ADDED" backgroundImage={image} />
			<section className={style.gridList}>
				{recentlyAdded.map((game) => (
					<GameItem_EX
						key={game.id}
						img={game.thumbnail}
						title={game.title}
						platform={game.platform}
						genre={game.genre}
					/>
				))}
			</section>
		</main>
	);
};

export default RecentlyAddedPage;
