import React from 'react';
import style from './HamburgerButton.module.scss'
import MenuBurger from "../../assets/images/Menu_Burger_Alternative.svg";
import MenuClose from "../../assets/images/Menu_Close_Alternative.svg"
import GenericButton from "./GenericButton.jsx";

const HamburgerButton = ({isNavbarOpen, setIsNavbarOpen}) => {
	return (
		<GenericButton
			className={style.hamburgerButton}
			onClick={() => {setIsNavbarOpen(!isNavbarOpen)}}
		>
			<img src={isNavbarOpen ? MenuClose : MenuBurger} alt="Menu-Button"/>
		</GenericButton>
	);
};

export default HamburgerButton;
