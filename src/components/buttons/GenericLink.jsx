import React from 'react';
import styles from './GenericLink.module.scss'
import {Link} from "react-router-dom";

const GenericLink = ({to, className, children, style, onClick, ...props}) => {
	return (
		<Link className={[className, styles.genericLink].join(" ")} to={to} style={style} onClick={onClick} {...props}>
			{children}
		</Link>
	);
};

export default GenericLink;
