import React, {useState} from 'react';
import style from "./Layout.module.scss";
import NavBar from "../navigation/NavBar.jsx";


const Layout = ({children}) => {


	return (
		<div className={style.layout}>
			<NavBar/>
			<header>
				<h1>FREE2GAME</h1>
				<input type="text"/>
			</header>
			{children}
		</div>
	);
};

export default Layout;
