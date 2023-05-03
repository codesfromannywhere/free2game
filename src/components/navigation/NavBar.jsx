import React, {useState} from 'react';
import style from './NavBar.module.scss'

import HamburgerButton from "./HamburgerButton.jsx";
import NavButton from "./NavButton.jsx";
import HomeIcon from "../../assets/images/Menu_Home.svg"
import GamesIcon from "../../assets/images/Menu_Games.svg"
import RecentlyIcon from "../../assets/images/Menu_Recently.svg"
import {useLocation} from "react-router-dom";
import {ClickAwayListener} from "@mui/base";


const NavBar = () => {
	const [isNavBarOpen, setIsNavBarOpen] = useState(false);
	const location = useLocation();
	console.log(location.pathname === "/");

	const isActiveStyle = {
		background: "rgba(255, 155, 155, 0.1)",
		borderColor: "rgb(250, 100, 100)"
	}

	return (
		<ClickAwayListener onClickAway={() => {if(isNavBarOpen) setIsNavBarOpen(false)}}>
			<aside
				className={style.navBar}
				style={{width: isNavBarOpen ? `250px` : `64px`}}
			>
				<HamburgerButton
					isNavbarOpen={isNavBarOpen}
					setIsNavbarOpen={setIsNavBarOpen}
				/>
				<nav>
					<NavButton
						icon={HomeIcon}
						buttonText={"Homepage"}
						to={"/"}
						style={location.pathname === "/" ? isActiveStyle : {}}
						onClick={() => {if(isNavBarOpen) setIsNavBarOpen(false)}}
					/>
					<NavButton
						icon={GamesIcon}
						buttonText={"All Games"}
						to={"/all-games"}
						style={location.pathname === "/all-games" ? isActiveStyle : {}}
						onClick={() => {if(isNavBarOpen) setIsNavBarOpen(false)}}
					/>
					<NavButton
						icon={RecentlyIcon}
						buttonText={"Recently Added"}
						to={"/recently-added"}
						style={location.pathname === "/recently-added" ? isActiveStyle : {}}
						onClick={() => {if(isNavBarOpen) setIsNavBarOpen(false)}}
					/>
				</nav>
			</aside>
		</ClickAwayListener>
	);
};

export default NavBar;
