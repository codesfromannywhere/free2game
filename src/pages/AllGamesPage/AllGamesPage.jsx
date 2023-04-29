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


	return (
		<main className={style.allGamesPage}>
			{/* <GenericDropdown></GenericDropdown> */}
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
						)
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