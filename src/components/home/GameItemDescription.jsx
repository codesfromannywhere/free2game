import { Link } from "react-router-dom"

const GameItemDescription = (props) => {
    return (
        <section>
            <img className="gameImg" src={props.img} alt={props.title} />
            <article className="gameCard">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <Link>Read More</Link>
            </article>
            <section>
                <img src="" alt="" />
                <p>{props.genre}</p>
            </section>
        </section>
    );
}

export default GameItemDescription;