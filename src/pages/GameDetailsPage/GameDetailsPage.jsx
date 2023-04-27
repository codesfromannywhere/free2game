import React from 'react';
import style from './GameDetailsPage.module.scss'

import { useState, useEffect } from 'react';

const GameDetailsPage = () => {

	const [gameDetails, setGameDetails] = useState([])

	useEffect(() => {
		fetch('https://www.freetogame.com/api/games')
			.then(res => res.json())
			.then(data => {
				setGameDetails(data)
			})
	}, [])

	console.log(gameDetails)

	return (
		<div className={style.gameDetailsPage}>
			<main>
				<section>
					<img src={gameDetails[0].thumbnail} alt={`thumbnail ${gameDetails[0].title}`} />
				</section>
				<h2>{gameDetails[0].title}</h2>
				<article>
					<div>
					</div>
				</article>
			</main>
		</div>
	);
};

export default GameDetailsPage;
