import React from 'react';
import style from './HomePage.module.scss'
import HomeRecentList from '../../components/home/HomeRecentList'

const HomePage = () => {
	return (
		<main className={style.homePage}>
			HomePage
			<HomeRecentList />
		</main>
	);
};

export default HomePage;
