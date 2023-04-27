import React from 'react';
import style from './GameDetailsPage.scss?inline'

const GameDetailsPage = () => {

	const [gameDetails, setGameDetails] = useState([])

	useEffect(() => {
		fetch('https://www.freetogame.com/api/games')
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setGameDetails(data)
				console.log(gameDetails)

			})
	}, [])


	return (
		<div className={style.gameDetailsPage}>
			GameDetailsPage
		</div>
	);
};

export default GameDetailsPage;
