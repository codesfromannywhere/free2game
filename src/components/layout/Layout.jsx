import React, { createContext, useState } from 'react';
import style from "./Layout.module.scss";
import NavBar from "../navigation/NavBar.jsx";
import LogoImage from "../../assets/images/Logo.svg"
import SearchBar from "../navigation/SearchBar.jsx";
import { Link } from "react-router-dom";

export const SearchTextContext = createContext([]);
const Layout = ({ children }) => {
	const [searchText, setSearchText] = useState("");
	return (
		<SearchTextContext.Provider value={[searchText.toLowerCase(), setSearchText]}>
			<div className={style.layout}>
				<NavBar />
				<header>
					<Link to={"/"} onClick={() => {
						window.scroll(0, 0);
					}} >
						<img src={LogoImage} alt="Logo" />
						<h1>FREE2GAME</h1>
					</Link>

					<SearchBar />
				</header>
				{children}
			</div>
		</SearchTextContext.Provider>
	);
};

export default Layout;
