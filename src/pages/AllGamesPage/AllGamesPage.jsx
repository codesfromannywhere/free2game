import React from 'react';
import style from './AllGamesPage.module.scss';

import { SearchTextContext } from '../../components/layout/Layout.jsx';
import { useState, useEffect, useContext } from 'react';
import GenericDropdown from "../../components/buttons/GenericDropdown.jsx";
import GameItem_EX from '../../components/experimental/GameItem_EX';



const AllGamesPage = () => {

	const [allGames, setAllGames] = useState([]);

	useEffect(() => {
		// fetch(`https://www.freetogame.com/api/games?platform=${platform}&category=${genre}&sort-by=${sort}`)
		// fetch('https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date')
		fetch('https://www.freetogame.com/api/games')
			.then((res) => res.json())
			.then((data) => setAllGames(data))
	}, [])
	console.log(allGames);


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
	const [MMORPG, setMMORPG] = useState(false);
	const [shooter, setShooter] = useState(false);
	const [strategy, setStrategy] = useState(false);
	const [moba, setMoba] = useState(false);

	const optionsGenre = [
		{
			text: "MMORPG",
			setChecked: setMMORPG,
			isChecked: MMORPG
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




	return (
		<main className={style.allGamesPage}>
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



// _______________________________________________
// // 1. Versuch Dropdown-Menu

// import Select from 'react-select';

// const optionsPlatform = [
// 	{ value: 'Web Browser' || 'PC (Windows)', label: 'all Platforms' },
// 	{ value: 'PC (Windows)', label: 'Windows (PC)' },
// 	{ value: 'Web Browser', label: 'Browser (Web)' },
// ]
// const [selectedOptionsPlatform, setSelectedOptionsPlatform] = useState([])

// _______________
// const MultiValue = ({ data, removeValue }) => {
// 	return (
// 		<div className="multi-value">
// 			{data.label}
// 			<span className="multi-value-remove" onClick={() => removeValue(data)}>
// 				&times;
// 			</span>
// 		</div>
// 	);
// };

// ___________________________
// im return:
{/* <Select
				isMulti={true}
				options={optionsPlatform}
				value={selectedOptionsPlatform}
				onChange={(selected) => setSelectedOptionsPlatform(selected)}
				components={{ MultiValue }}
			/> */}

// ============================================	
// //  2. Versuch 

// import GenericDropdown from '../../components/buttons/GenericDropdown';

// const [savedFilters, setSavedFilter] = useState([]);

{/* <GenericDropdown
				name="test">
				<option value={"Platform"}>PLATFORM</option>
				<option><input type="checkbox" value="All Platforms"/></option>
				<option>Windows (PC)</option>
				<option>Browser (Web)</option>
			</GenericDropdown>
			<GenericDropdown
				name="test">
				<option value={"Genre/Tag"}>GENRE/TAG</option>
				<option>MMORPG</option>
				<option>Shooter</option>
				<option>Strategy</option>
				<option>Moba</option>
			</GenericDropdown>
			<GenericDropdown
				name="test">
				<option value={"Sort by"}>SORT BY</option>
				<option>Relevance</option>
				<option>Popularity</option>
				<option>Release Date</option>
				<option>Alphabetical</option>
			</GenericDropdown> */}



// ============================================	
// FILTER + SORTIERUNG NACH ANFANGSBUCHSTABE:
// ============================================	
			// {allGames
			// 	.filter((game) =>
			// 		game.title.toLowerCase().startsWith(searchText.toLowerCase())
			// 	)
			// 	.sort((gameA, gameB) =>
			// 		gameA.title.toLowerCase() > gameB.title.toLowerCase() ? 1 : -1
			// 	)
			// 	.map((game) => (
			// 		<GameItem_EX
			// 			key={game.id}
			// 			img={game.thumbnail}
			// 			title={game.title}
			// 			platform={game.platform}
			// 			genre={game.genre}
			// 		/>
			// 	))}