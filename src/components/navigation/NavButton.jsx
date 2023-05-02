import React from 'react';
import styles from './NavButton.module.scss'
import GenericLink from "../buttons/GenericLink.jsx";

const NavButton = ({icon, iconDescription, buttonText, to, style, ...props}) => {
	return (
		<GenericLink className={styles.navButton} to={to} style={style} {...props}>
			<img src={icon} alt={iconDescription}/>
			<h3>
				{buttonText}
			</h3>
		</GenericLink>
	);
};

export default NavButton;
