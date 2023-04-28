import React from 'react';
import style from './HomePage.module.scss'
import HomeRecentList from '../../components/home/HomeRecentList'
import TopGamesBrowserList from '../../components/home/TopGamesBrowserList'
import TopGamesPCList from '../../components/home/TopGamesPCList'



const HomePage = () => {
	return (
		<main className={style.homePage}>
			Hier kommt eine HeroSection hin!
			<HomeRecentList />
			<TopGamesPCList />
			<TopGamesBrowserList />
		</main>
	);
};

export default HomePage;
