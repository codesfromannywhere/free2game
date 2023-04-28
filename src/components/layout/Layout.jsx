import React from 'react';
import style from "./Layout.module.scss";
import NavBar from "../navigation/NavBar.jsx";
import LogoImage from "../../assets/images/Logo.svg"

const Layout = ({children}) => {

	return (
		<div className={style.layout}>
			<NavBar/>
			<header>
				<hgroup>
					<img src={LogoImage} alt="Logo"/>
					<h1>FREE2GAME</h1>
				</hgroup>

				<input type="text">

				</input>
			</header>
			{children}
		</div>
	);
};

export default Layout;
