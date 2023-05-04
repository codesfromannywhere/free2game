import React from 'react';
import style from './HomePage.module.scss'
import HomeRecentList from '../../components/lists/HomeRecentList'
import TopGamesBrowserList from '../../components/lists/TopGamesBrowserList'
import TopGamesPCList from '../../components/lists/TopGamesPCList'
import HeroSection from '../../components/layout/HeroSection.jsx'
import GenericLink from "../../components/common/GenericLink";



const HomePage = () => {
	return (
		<main className={style.homePage}>
			<HeroSection title="FIND & TRACK THE BEST FREE-TO-PLAY GAMES!" backgroundImage={`https://www.freetogame.com/g/452/Call-of-Duty-Warzone-1.jpg`} />
			<HomeRecentList />
			<GenericLink className={style.buttonReadMore} to={"recently-added"} onClick={() => {
				window.scroll(0, 0);
			}}>SHOW MORE</GenericLink >
			<TopGamesPCList />
			<GenericLink className={style.buttonReadMore} to={"/all-games"} onClick={() => {
				window.scroll(0, 0);
			}}>SHOW MORE</GenericLink>
			<TopGamesBrowserList />
			<GenericLink className={style.buttonReadMore} to={"/all-games"} onClick={() => {
				window.scroll(0, 0);
			}}>SHOW MORE</GenericLink>
		</main>
	);
};

export default HomePage;
