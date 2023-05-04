import { useState, useEffect } from "react";
import GameItem from '../ListItems/GameItem.jsx'
import style from "./HomeRecentList.module.scss";
import {months} from "../../data/timeDate.js";


const TopGamesBrowserList = () => {

    const [recentListData, setRecentListData] = useState([])

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?platform=browser&sort-by=popularity`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.slice(0, 4))
                setRecentListData(data.slice(0, 4))
            })
    }, [])
    return (
        <section className={style.gameCardSec}>
            <h2>Top 4 Games for Browser in {months[new Date().getMonth()]} {new Date().getFullYear()}</h2>
            <article className={style.gameCardContainer}>
                {recentListData.map((game, i) => {
                    // console.log(game.title)
                    return (
                        <GameItem
                            img={game.thumbnail}
                            title={game.title}
                            platform={game.platform}
                            id={game.id}
                            genre={game.genre}
                            key={i}
                        />
                    )

                })

                }
            </article>
        </section>
    );
}

export default TopGamesBrowserList;