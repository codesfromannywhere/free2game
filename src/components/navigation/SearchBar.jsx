import React, {useContext} from 'react';
import style from './SearchBar.module.scss'
import {SearchTextContext} from "../layout/Layout.jsx";
import {useLocation, useNavigate} from "react-router-dom";


const SearchBar = () => {
	const searchTextState = useContext(SearchTextContext);

	const navigate = useNavigate();
	const location = useLocation();
	return (
		<article className={style.searchBar}>
			<input
				type="text"
				value={searchTextState[0]}
				onChange={(event) => {

				searchTextState[1](event.target.value);
				if(location.pathname !== "/all-games"){navigate("/all-games")}

			}}/>
		</article>
	);
};

export default SearchBar;
