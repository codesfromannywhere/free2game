import React from 'react';
import style from './HomePage.module.scss'
import HomeRecentList from '../../components/home/HomeRecentList'
import TopGamesBrowserList from '../../components/home/TopGamesBrowserList'
import TopGamesPCList from '../../components/home/TopGamesPCList'
import HeroSection from '../../components/HeroSection'
import image from '../../assets/images/logo.svg'
import GenericLink from "../../components/buttons/GenericLink";



const HomePage = () => {
	return (
		<main className={style.homePage}>
			<HeroSection title="Find & track the best free-to-play games!" backgroundImage={image} />
			<HomeRecentList />
			<GenericLink className={style.buttonReadMore}>SHOW MORE</GenericLink>
			<TopGamesPCList />
			<GenericLink className={style.buttonReadMore}>SHOW MORE</GenericLink>
			<TopGamesBrowserList />
			<GenericLink className={style.buttonReadMore}>SHOW MORE</GenericLink>
		</main>
	);
};

export default HomePage;
