import { Link } from "react-router-dom"
import windowsIcon from "../../assets/images/icon_windows.svg"
import BrowserIcon from "../../assets/images/icon_browser.svg"

const GameItemDescription = (props) => {
    return (
        <section>
            <img src={props.img} alt={props.title} />
            <article className="gameCard">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <Link>Read More</Link>
            </article>
            <article>
                <img src={props.platform === "Web Browser" ? BrowserIcon : windowsIcon} alt="platform icon" />
                <p>{props.genre}</p>
            </article>
        </section>
    );
}

export default GameItemDescription;