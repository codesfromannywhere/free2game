import React from 'react';
import style from './RecentlyAddedPage.module.scss';
import { useState, useEffect } from 'react';
// import RecentlyAddedList from '../../components/recentlyAddedComps/RecentlyAddedList';

const RecentlyAddedPage = () => {

	const [recentlyAdded, setRecentlyAdded] = useState([]);

	useEffect(() => {

		fetch('https://www.freetogame.com/api/games?sort-by=release-date')
			.then((res) => res.json())
			.then((data) => setRecentlyAdded(data))
	}, []);

	console.log(recentlyAdded);


	return (
		<main className={style.recentlyAddedPage}>
			RecentlyAddedPage
			{/* {recentlyAdded.map} */}

		</main>
	);
};

export default RecentlyAddedPage;
