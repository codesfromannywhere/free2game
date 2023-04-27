import React from 'react';
import style from './HomePage.module.scss'
import HomeRecentList  from '../../components/HomeRecentList'

const HomePage = () => {
	return (
		<div className={style.homePage}>
			HomePage
			<h1>THIS IS HOME</h1>
			<HomeRecentList/>
		</div>
	);
};

export default HomePage;
