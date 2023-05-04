import {useEffect, useState} from "react";
import style from ".//TopGamesPCList.module.scss";
import windowsIcon from "../../assets/images/icon_windows.svg";
import GenericLink from "../common/GenericLink.jsx";
import FilterTag from "../common/FilterTag.jsx";
import {months} from "../../data/timeDate.js";


const TopGamesPCList = () => {

	const [recentListData, setRecentListData] = useState([]);
	const [largeImage, setLargeImage] = useState("");

	useEffect(() => {
		fetch(`https://www.freetogame.com/api/games?platform=pc&sort-by=popularity`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.slice(0, 4))
                setRecentListData(data.slice(0, 4));
                fetch(`https://www.freetogame.com/api/game?id=${data[0].id}`)
                    .then(res => res.json())
                    .then(data => {
                        if (!data || !data.screenshots || data.screenshots.length <= 0) {
                            return;
                        }
                        setLargeImage(data.screenshots[Math.floor(Math.random() * data.screenshots.length)].image);
                    });
            });
	}, []);

	console.log(recentListData);
	return (
		<section className={style.gameCardSec}>
			<h2>Top 4 Games for PC in {months[new Date().getMonth()]} {new Date().getFullYear()}</h2>
			<article className={style.PCGameCardContainer}>

				<div className={style.Game1}>
					<p className={style.number1}>1</p>

					<div className={style.gameTitelInfo}>
						<h3>{recentListData[0]?.title.toUpperCase()}</h3>
						<GenericLink to={`/game/${recentListData[0]?.id}`} className={style.buttonReadMore}
									 onClick={() => {
										 window.scroll(0, 0);
									 }}>READ MORE</GenericLink>

						<div className={style.filterTagContent}>
							<FilterTag img={windowsIcon} alt="windows Icon"/>
							<FilterTag text={recentListData[0]?.genre}/>
						</div>

					</div>

					<img src={largeImage} className={style.gameImg}
						 alt="Game Thumbnail"/>
				</div>

				<div className={style.GameSmaller}>
					<img className={style.gameImg} src={recentListData[1]?.thumbnail} alt="Game Thumbnail"/>
					<p className={style.numberSmaller}>2</p>
					<div>
						<h3>{recentListData[1]?.title}</h3>
						<GenericLink to={`/game/${recentListData[1]?.id}`} className={style.buttonReadMore}
									 onClick={() => {
										 window.scroll(0, 0);
									 }}>READ MORE</GenericLink>

						<div className={style.filterTagContent}>
							<FilterTag img={windowsIcon} alt="windows Icon"/>
							<FilterTag text={recentListData[1]?.genre}/>
						</div>
					</div>
				</div>

				<div className={style.GameSmaller}>
					<img className={style.gameImg} src={recentListData[2]?.thumbnail} alt="Game Thumbnail"/>
					<p className={style.numberSmaller}>3</p>
					<div>
						<h3>{recentListData[2]?.title}</h3>
						<GenericLink to={`/game/${recentListData[2]?.id}`} className={style.buttonReadMore}
									 onClick={() => {
										 window.scroll(0, 0);
									 }}>READ MORE</GenericLink>

						<div className={style.filterTagContent}>
							<FilterTag img={windowsIcon} alt="windows Icon"/>
							<FilterTag text={recentListData[2]?.genre}/>
						</div>
					</div>
				</div>

				<div className={style.GameSmaller}>
					<img className={style.gameImg} src={recentListData[3]?.thumbnail} alt="Game Thumbnail"/>
					<p className={style.numberSmaller}>4</p>
					<div>
						<h3>{recentListData[3]?.title}</h3>
						<GenericLink to={`/game/${recentListData[3]?.id}`} className={style.buttonReadMore}
									 onClick={() => {
										 window.scroll(0, 0);
									 }}>READ MORE</GenericLink>

						<div className={style.filterTagContent}>
							<FilterTag img={windowsIcon} alt="windows Icon"/>
							<FilterTag text={recentListData[3]?.genre}/>
						</div>
					</div>
				</div>


				{/* {recentListData.map((game, i) => {
                    // console.log(game.title)
                    return (
                        <TopGamesPCItem
                            img={game.thumbnail}
                            title={game.title}
                            platform={game.platform}
                            id={game.id}
                            genre={game.genre}
                            key={i}
                            style={{
                                gridRow: i === 0 ? "1 / 4" : `${i} / ${i + 1}`
                            }}
                        />
                    )

                })
                } */}
			</article>

		</section>
	);
};

export default TopGamesPCList;