import { useState, useEffect } from "react";
import GameItem from "./GameItem";



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
            <h3>Top 4 Games for PC in June 2022</h3>
            <article className="HomeListContainer">

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
            <button>SHOW MORE</button>
        </section>);
}

export default TopGamesPCList;