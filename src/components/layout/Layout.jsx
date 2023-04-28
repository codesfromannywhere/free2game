import React, {createContext, useState} from 'react';
import style from "./Layout.module.scss";
import NavBar from "../navigation/NavBar.jsx";
import LogoImage from "../../assets/images/Logo.svg"
import SearchBar from "../navigation/SearchBar.jsx";

export const SearchTextContext = createContext([]);
const Layout = ({children}) => {
	const [searchText, setSearchText] = useState("Test");
	return (
		<SearchTextContext.Provider value={[searchText, setSearchText]}>
			<div className={style.layout}>
				<NavBar/>
				<header>
					<hgroup>
						<img src={LogoImage} alt="Logo"/>
						<h1>FREE2GAME</h1>
					</hgroup>

					<SearchBar/>
				</header>
				{children}
			</div>
		</SearchTextContext.Provider>
	);
};

export default Layout;
