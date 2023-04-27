import React, {useState} from 'react';
import style from './NavBar.module.scss'

import HamburgerButton from "./HamburgerButton.jsx";
import NavButton from "./NavButton.jsx";

const closedWidth = 50;
const openedWidth = 200;

const NavBar = () => {
	const [isNavBarOpen, setIsNavBarOpen] = useState(false);

	return (
		<aside className={style.navBar} style={{width: isNavBarOpen ? `` : ``}}>
			<HamburgerButton/>
			<nav>
				<NavButton/>
			</nav>
		</aside>
	);
};

export default NavBar;
