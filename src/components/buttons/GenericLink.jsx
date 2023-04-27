import React from 'react';
import style from './GenericLink.module.scss'
import {Link} from "react-router-dom";

const GenericLink = ({to, className, children}) => {
	return (
		<Link className={[style.genericLink, className].join(" ")} to={to}>
			{children}
		</Link>
	);
};

export default GenericLink;
