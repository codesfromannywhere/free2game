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
		<main className={style.gameDetailsPage}>
			<section className={style.heroSectionImage}>
				<img src={gameDetails[0].thumbnail} alt="" />
			</section>
			<h2>{gameDetails[0].title.toUpperCase()}</h2>
			<article>
				<div>
					<img src={gameDetails[0].thumbnail} alt={`thumbnail ${gameDetails[0].title}`} />
					<p>Platform: {gameDetails[0].platform}</p>
					<button>Action RPG</button>
					<button>Play NOW</button>
					<div>
						<h3>About</h3>
						<p>{gameDetails[0].description}</p>
					</div>

				</div>
			</article>
		</main>
	);
};

export default GameDetailsPage;
