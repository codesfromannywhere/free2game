import { useState, useEffect } from "react";
import GameItemDescription from "./GameItemDescription";
import GameItem_EX from '../experimental/GameItem_EX'
import style from "../home/HomeListGrid.module.scss";



const HomeRecentList = () => {

    const [recentListData, setRecentListData] = useState([])

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?&sort-by=release-date?&platform=all`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.slice(0, 4))
                setRecentListData(data.slice(0, 4))
            })
    }, [])

    return (
        <section >
            <h2>Recently Added</h2>
            <article className={style.gameCardContainer}>
                {recentListData.map((game, i) => {
                    // console.log(game.title)
                    return (
                        <GameItem_EX
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
