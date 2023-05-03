import React from 'react';
import style from './FilterTag.module.scss';
import GenericButton from "./buttons/GenericButton.jsx";
import closeIcon from "../assets/images/icon_close.svg";

const FilterTag = ({
					   img,
					   text,
					   isRemoveable = false,
					   onOptionChange,
					   optionType,
					   optionIndex,
				   }) => {
	const handleRemoveClick = () => {
		if (onOptionChange) {
			onOptionChange(optionIndex, false, optionType);
		}
	};

	let removeButton;
	if (isRemoveable) {
		removeButton = (
			<GenericButton onClick={handleRemoveClick}>
				<img src={closeIcon} alt={"close"} />
			</GenericButton>
		);
	}

	return (
		<article className={style.filterTag} onClick={null}>
			{img ? <img src={img} alt={`${text} icon`} /> : ""}
			{text ? <p>{text}</p> : ""}
			{removeButton}
		</article>
	);
};

export default FilterTag;
