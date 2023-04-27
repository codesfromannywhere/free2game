import React from 'react';
import style from './NavButton.module.scss'
import {Link} from "react-router-dom";

const NavButton = ({icon, iconDescription, buttonText, linkPath}) => {
	return (
		<Link className={style.navButton} to={linkPath}>
			<img src={icon} alt={iconDescription}/>
			<h3>
				{buttonText}
			</h3>
		</Link>
	);
};

export default NavButton;
