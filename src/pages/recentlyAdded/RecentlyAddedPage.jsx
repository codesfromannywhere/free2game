import React from 'react';
import style from './RecentlyAddedPage.module.scss?inline';
import { useState, useEffect } from 'react';

const RecentlyAddedPage = () => {

	const [recentlyAdded, setRecentlyAdded] = useState([]);

	useEffect(() => {

		fetch('https://www.freetogame.com/api/games?sort-by=release-date')
			.then((res) => res.json())
			.then((data) => setRecentlyAdded(data))
	}, []);

	console.log(recentlyAdded);


	return (
		<div className={style.recentlyAddedPage}>
			RecentlyAddedPage
		</div>
	);
};

export default RecentlyAddedPage;
