import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import style from './AllGamesPage.module.scss';

import { SearchTextContext } from '../../components/layout/Layout.jsx';
import GenericDropdown from "../../components/buttons/GenericDropdown.jsx";
import GameItem_EX from '../../components/experimental/GameItem_EX';
import HeroSection from '../../components/HeroSection';
import { platforms, sorting, tags } from "../../data/tagData.jsx";
import FilterTag from "../../components/FilterTag.jsx";

const AllGamesPage = () => {

	const [allGames, setAllGames] = useState([]);
	const [filteredGames, setFilteredGames] = useState([]);

	// Suche nach Games in SearchBar
	const [searchText] = useContext(SearchTextContext);

	const [platformOptions, setPlatformOptions] = useState([]);
	const [genreOptions, setGenreOptions] = useState([]);
	const [sortOptions, setSortOptions] = useState([]);

	const platformStates = useMemo(() => platformOptions.map(option => option.state), [platformOptions]);
	const genreStates = useMemo(() => genreOptions.map(option => option.state), [genreOptions]);
	const sortStates = useMemo(() => sortOptions.map(option => option.state), [sortOptions]);

	const platformOptionsRef = useRef(platformOptions);
	const genreOptionsRef = useRef(genreOptions);

	useEffect(() => {
		platformOptionsRef.current = platformOptions;
	}, [platformOptions]);

	useEffect(() => {
		genreOptionsRef.current = genreOptions;
	}, [genreOptions]);

	useEffect(() => {
		const tmpPlatformOptions = platforms.map((item, i) => ({
			text: item,
			state: i <= 0
		}));
		setPlatformOptions(tmpPlatformOptions);

		const tmpGenreOptions = tags.map(item => ({
			text: item,
			state: false
		}));
		setGenreOptions(tmpGenreOptions);

		const tmpSortOptions = sorting.map((item, i) => ({
			text: item,
			state: i <= 0
		}));
		setSortOptions(tmpSortOptions);
	}, []);

	const handleOptionChange = useCallback((index, state, type) => {
		if (type === "platform") {
			setPlatformOptions((prevOptions) => {
				const newOptions = [...prevOptions];
				newOptions[index].state = state;
				console.log(newOptions);
				return newOptions;
			});
		} else if (type === "genre") {
			setGenreOptions((prevOptions) => {
				const newOptions = [...prevOptions];
				newOptions[index].state = state;
				return newOptions;
			});
		} else if (type === "sort") {
			setSortOptions((prevOptions) => {
				const newOptions = [...prevOptions];
				newOptions[index].state = state;
				return newOptions;
			});
		}
	}, []);

	useEffect(() => {
		let url = 'https://www.freetogame.com/api/games';

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setAllGames(data);
			});
	}, []);

	useEffect(() => {
		const bUseFetch = true;
		if (bUseFetch) {
			let platform = platformOptionsRef.current.find(item => item.state === true)?.text || "all";
			let selectedGenres = genreOptionsRef.current.filter(item => item.state === true).map(item => item.text);
			let sort = sortOptions.find(item => item.state)?.text;

			let gamesUrl = `https://www.freetogame.com/api/games?platform=${platform}&sort-by=${sort}`;
			let filterUrl = `https://www.freetogame.com/api/filter?tag=${selectedGenres.join(".")}&platform=${platform}&sort=${sort}`;

			let url = selectedGenres.length > 0 ? filterUrl : gamesUrl;

			console.log(sort);

			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setFilteredGames(data);
				});
		} else {
			setFilteredGames(allGames.filter((a) => {
				const platformMatch = platformOptionsRef.current.some(item => item.state === true && a.platform === item.text);
				const genreMatch = genreOptionsRef.current.some(item => item.state === true && a.genre.toLowerCase() === item.text);

				if (!platformMatch && !genreMatch) return true
				else { return platformMatch || genreMatch }
			}));
		}
	}, [allGames, platformStates, sortStates, genreStates, searchText]);

	const [gamesResult, setGamesResult] = useState();

	useEffect(() => {
		let element;
		if (filteredGames.length >= 0 && filteredGames.some((item) => {
			return item.title.toLowerCase().includes(searchText);
		})) {
			element = (
				<section className={style.gridList}>
					{filteredGames.map((elt) => {
						if(!elt.title.toLowerCase().includes(searchText)){
							return;
						}
						return (
							<GameItem_EX
								key={elt.id}
								id={elt.id}
								img={elt.thumbnail}
								title={elt.title}
								platform={elt.platform}
								genre={elt.genre}
							/>
						);

					})}
				</section>
			)
		} else {
			element = (
				<section style={style.oops}>
					<h2>
						Oops!
					</h2>
					<h3>
						We didn't find anything! Please try removing some filters.
					</h3>
				</section>
			)
		}
		setGamesResult(element)
	}, [filteredGames])

	return (
		<main className={style.allGamesPage}>
			<HeroSection title="ALL GAMES" backgroundImage={"https://www.freetogame.com/g/137/Metal-War-Online-3.jpg"} />
			<GenericDropdown title={"PLATFORM"} options={platformOptions} onOptionChange={handleOptionChange} optionType={"platform"} />
			<GenericDropdown title={"GENRE / TAG"} options={genreOptions} onOptionChange={handleOptionChange} optionType={"genre"} />
			<GenericDropdown title={"SORT BY"} options={sortOptions} onOptionChange={handleOptionChange} optionType={"sort"} />
			<section style={style.tagList}>
				{genreOptions.map((item, index) => {
					if (item.state) {
						return (
							<FilterTag
								key={item.text + index}
								text={item.text}
								isRemoveable={true}
								onOptionChange={handleOptionChange}
								optionType={"genre"}
								optionIndex={index}
							/>
						);
					}
				})}
			</section>
			{gamesResult}
		</main>
	);
};

export default AllGamesPage;