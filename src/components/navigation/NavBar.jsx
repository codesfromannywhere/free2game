import React, {useState} from 'react';
import style from './NavBar.module.scss'

import HamburgerButton from "./HamburgerButton.jsx";
import NavButton from "./NavButton.jsx";
import HomeIcon from "../../assets/images/Menu_Home.svg"
import GamesIcon from "../../assets/images/Menu_Games.svg"
import RecentlyIcon from "../../assets/images/Menu_Recently.svg"


const NavBar = () => {
	const [isNavBarOpen, setIsNavBarOpen] = useState(false);

	return (
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
				/>
				<NavButton
					icon={GamesIcon}
					buttonText={"All Games"}
					to={"/all-games"}
				/>
				<NavButton
					icon={RecentlyIcon}
					buttonText={"Recently Added"}
					to={"recently-added"}
				/>
			</nav>
		</aside>
	);
};

export default NavBar;
