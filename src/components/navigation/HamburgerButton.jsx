import React from 'react';
import style from './HamburgerButton.scss'
import MenuBurger from "../../assets/images/Menu_Burger_Alternative.svg";
import MenuClose from "../../assets/images/Menu_Close_Alternative.svg"

const HamburgerButton = ({isMenuOpen}) => {
	return (
		<button className={style.hamburgerButton}>
			<img src={isMenuOpen ? MenuClose : MenuBurger} alt="Menu-Button"/>
		</button>
	);
};

export default HamburgerButton;
