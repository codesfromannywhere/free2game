import { useState, useEffect } from "react";
import GameItemDescription from "./GameItemDescription";
import {windowsIcon} from "../../assets/images/icon_windows.svg"
import {BrowserIcon} from "../../assets/images/icon_browser.svg"

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
        <section className="HomeRecentList">

            <h3>Recently Added</h3>
            <section className="HomeRecentListSection">
                {recentListData.map((game, i) => {
                    // console.log(game.title)
                    return (
                        <GameItemDescription
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
            </section>

            <button>SHOW MORE</button>
        </section>
    )
}

export default HomeRecentList;
