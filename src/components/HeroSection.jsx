import React from 'react';
import style from './HeroSection.module.scss'

const HeroSection = ({title, backgroundImage}) => {
	return (
		<header
			className={style.heroSection}
			style={{
				backgroundImage: url(backgroundImage)
			}}
		>
			{
				title ? (<h1>{title}</h1>) : ""
			}
		</header>
	);
};

export default HeroSection;
