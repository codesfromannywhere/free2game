import { useState, useEffect } from "react";
import GameItem from '../ListItems/GameItem.jsx'
import style from "./HomeRecentList.module.scss";



const HomeRecentList = () => {

    const [recentListData, setRecentListData] = useState([])

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?&sort-by=release-date?&platform=all`)
            .then(res => res.json())
            .then(data => {
                setRecentListData(data.slice(0, 4))
            })
    }, [])

    return (
        <section className={style.gameCardSec} >
            <h2>Recently Added</h2>
            <article className={style.gameCardContainer}>
                {recentListData.map((game, i) => {
                    // console.log(game.title)
                    return (
                        <GameItem
                            img={game.thumbnail}
                            title={game.title}
                            description={game.short_description}
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
    )
}

export default HomeRecentList;
