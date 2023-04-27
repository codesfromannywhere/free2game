import React from 'react';
import style from './NavButton.module.scss'
import GenericLink from "../buttons/GenericLink.jsx";

const NavButton = ({icon, iconDescription, buttonText, linkPath}) => {
	return (
		<GenericLink className={style.navButton} to={linkPath}>
			<img src={icon} alt={iconDescription}/>
			<h3>
				{buttonText}
			</h3>
		</GenericLink>
	);
};

export default NavButton;
