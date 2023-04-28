import { useState, useEffect } from "react";
import GameItem from "./GameItem";
import GameItem_EX from '../experimental/GameItem_EX'
import style from "../home/HomeListGrid.module.scss";


const TopGamesBrowserList = () => {

    const [recentListData, setRecentListData] = useState([])

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?platform=browser&sort-by=release-date`)
            .then(res => res.json())
            .then(data => {
                console.log(data.slice(0, 4))
                setRecentListData(data.slice(0, 4))
            })
    }, [])
    return (
        <section>
            <h2>Top 4 Games for Browser in June 2022</h2>
            <article className={style.gameCardContainer}>
                {recentListData.map((game, i) => {
                    // console.log(game.title)
                    return (
                        <GameItem_EX
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
            <button>SHOW MORE</button>
        </section>
    );
}

export default TopGamesBrowserList;