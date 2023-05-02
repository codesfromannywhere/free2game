import React from 'react';
import style from './AllGamesPage.module.scss';

import { SearchTextContext } from '../../components/layout/Layout.jsx';
import { useState, useEffect, useContext } from 'react';
import GenericDropdown from "../../components/buttons/GenericDropdown.jsx";
import GameItem_EX from '../../components/experimental/GameItem_EX';
import HeroSection from '../../components/HeroSection';



const AllGamesPage = () => {

	const [allGames, setAllGames] = useState([]);




	// Suche nach Games in SearchBar
	const [searchText] = useContext(SearchTextContext)
	console.log(searchText);

	// DROPDOWN
	// -Platform-
	const [allPlatforms, setAllPlatforms] = useState(false);
	const [windows, setWindows] = useState(false);
	const [browser, setBrowser] = useState(false);

	const optionsPlatform = [
		{
			text: "all Platforms",
			setChecked: setAllPlatforms,
			isChecked: allPlatforms
		},
		{
			text: "Windows (PC)",
			setChecked: setWindows,
			isChecked: windows
		},
		{
			text: "Browser (Web)",
			setChecked: setBrowser,
			isChecked: browser
		}
	]

	// -Genre/Tag-
	const [mmorpg, setMmorpg] = useState(false);
	const [shooter, setShooter] = useState(false);
	const [strategy, setStrategy] = useState(false);
	const [moba, setMoba] = useState(false);

	const optionsGenre = [
		{
			text: "MMORPG",
			setChecked: setMmorpg,
			isChecked: mmorpg
		},
		{
			text: "Shooter",
			setChecked: setShooter,
			isChecked: shooter
		},
		{
			text: "Strategy",
			setChecked: setStrategy,
			isChecked: strategy
		},
		{
			text: "Moba",
			setChecked: setMoba,
			isChecked: moba
		}
	]

	// -Genre/Tag-
	const [relevance, setRelevance] = useState(false);
	const [popularity, setPopulatity] = useState(false);
	const [releaseDate, setReleaseDate] = useState(false);
	const [alphabetical, setAlphabetical] = useState(false);

	const optionsSort = [
		{
			text: "Relevance",
			setChecked: setRelevance,
			isChecked: relevance
		},
		{
			text: "Popularity",
			setChecked: setPopulatity,
			isChecked: popularity
		},
		{
			text: "Release Date",
			setChecked: setReleaseDate,
			isChecked: releaseDate
		},
		{
			text: "Alphabetical",
			setChecked: setAlphabetical,
			isChecked: alphabetical
		}
	]

	useEffect(() => {
		let url = 'https://www.freetogame.com/api/games';

		if (windows) {
			url += "?platform=pc"
		}

		console.log(url);
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setAllGames(data)
			})
	}, [])
	console.log(allGames);

	return (
		<main className={style.allGamesPage}>
			<HeroSection title="ALL GAMES" backgroundImage={"https://www.freetogame.com/g/137/Metal-War-Online-3.jpg"} />
			<GenericDropdown title={"PLATFORM"} options={optionsPlatform} />
			<GenericDropdown title={"GENRE / TAG"} options={optionsGenre} />
			<GenericDropdown title={"SORT BY"} options={optionsSort} />
			<section className={style.gridList}>
				{allGames.map((elt) => {
					if (elt.title.toLowerCase().includes(searchText.toLowerCase())) {
						return (
							<GameItem_EX
								key={elt.id}
								img={elt.thumbnail}
								title={elt.title}
								platform={elt.platform}
								genre={elt.genre}
							/>
						);
					} else {
						return null;
					}
				})}

			</section>
		</main>
	);
};

export default AllGamesPage;