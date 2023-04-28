import React from 'react';
import style from './HomePage.module.scss'
import HomeRecentList from '../../components/home/HomeRecentList'
import TopGamesBrowserList from '../../components/home/TopGamesBrowserList'
import TopGamesPCList from '../../components/home/TopGamesPCList'
import HeroSection from '../../components/HeroSection'


const HomePage = () => {
	return (
		<main className={style.homePage}>
			<HeroSection title="Find & track the best free-to-play games!" />
			<HomeRecentList />
			<TopGamesPCList />
			<TopGamesBrowserList />
		</main>
	);
};

export default HomePage;
