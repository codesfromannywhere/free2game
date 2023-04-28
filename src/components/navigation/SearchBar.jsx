import React, {useContext} from 'react';
import style from './SearchBar.module.scss'
import {SearchTextContext} from "../layout/Layout.jsx";
import {useNavigate} from "react-router-dom";


const SearchBar = () => {
	const searchTextState = useContext(SearchTextContext);

	const navigate = useNavigate();
	return (
		<article className={style.searchBar}>
			<input type="text" onChange={(event) => {

				searchTextState[1](event.target.value);
				navigate("/all-games");
			}}/>
		</article>
	);
};

export default SearchBar;
