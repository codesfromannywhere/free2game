import React from 'react';
import style from './FilterTag.module.scss'
import GenericButton from "./buttons/GenericButton.jsx";

const FilterTag = ({img, text}) => {
	return (
		<GenericButton className={style.filterTag}>
			{img ? <img src={img} alt={`${text} icon}`}/> : ""}
			{text ? <p>{text}</p> : ""}
		</GenericButton>
	);
};

export default FilterTag;
