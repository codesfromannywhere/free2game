import { useState, useEffect } from "react";
import TopGamesPCItem from "./TopGamesPCItem.jsx";
import style from "../home/TopGamesPCList.module.scss"


const TopGamesPCList = () => {

    const [recentListData, setRecentListData] = useState([])

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?platform=pc&sort-by=release-date`)
            .then(res => res.json())
            .then(data => {
                console.log(data.slice(0, 4))
                setRecentListData(data.slice(0, 4))
            })
    }, [])
    return (
        <section>
            <h2>Top 4 Games for PC in June 2022</h2>
            <article className={style.PCGameCardContainer}>

                {recentListData.map((game, i) => {
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
                }
            </article>

        </section>);
}

export default TopGamesPCList;