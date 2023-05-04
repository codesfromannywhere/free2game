import React, {useContext} from 'react';
import styles from './GenericLink.module.scss'
import {Link} from "react-router-dom";
import {SearchTextContext} from "../layout/Layout.jsx";

const GenericLink = ({to, className, children, style, onClick, ...props}) => {
	const [_, setSearchText] = useContext(SearchTextContext);
	return (
		<Link className={[className, styles.genericLink].join(" ")} to={to} style={style} onClick={(event) => {
			console.log("Search Text set");
			setSearchText("");
			onClick(event);
		}} {...props}>
			{children}
		</Link>
	);
};

export default GenericLink;
