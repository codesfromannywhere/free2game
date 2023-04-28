import React, {useContext} from 'react';
import style from './SearchBar.module.scss'
import {SearchTextContext} from "../layout/Layout.jsx";


const SearchBar = () => {
	const searchTextState = useContext(SearchTextContext);


	return (
		<article className={style.searchBar}>
			<input type="text" onChange={(event) => {
				searchTextState[1](event.target.value);
			}}/>
		</article>
	);
};

export default SearchBar;
