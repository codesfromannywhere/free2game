import { useState, useEffect } from "react";

const HomeRecentList = () => {


    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?&sort-by=release-date?&platform=all`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // setRecentData(data)
            })
    },)



    return (
        <section className="HomeRecentList">
            <h1>HALLOOOOOO</h1>
        </section>
    )
}

export default HomeRecentList;
