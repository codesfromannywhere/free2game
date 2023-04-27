import { useState, useEffect } from "react";
import GameItemDescription from "./home/GameItemDescription";
const HomeRecentList = () => {

    const [recentListData, setRecentListData] = useState([])


    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?&sort-by=release-date?&platform=all`)
            .then(res => res.json())
            .then(data => {
                console.log(data.slice(0, 4))
                setRecentListData(data.slice(0, 4))
            })
    }, [])



    return (
        <section className="HomeRecentList">

            <h3>Recently Added</h3>
            <section className="HomeRecentListContainer">
                {recentListData.map((item) => {
                    console.log(item.genre)
                    return (
                        <GameItemDescription
                            img={item.thumbnail}
                            title={item.title}
                            description={item.short_description}
                            platform={item.platform}
                            id={item.id}
                            genre={item.genre}
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
