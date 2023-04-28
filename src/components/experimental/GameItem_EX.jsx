import windowsIcon from "../../assets/images/icon_windows.svg"
import BrowserIcon from "../../assets/images/icon_browser.svg"
import GenericLink from "../buttons/GenericLink.jsx";
import style from "../experimental/GameItem_EX.module.scss";

const GameItem_EX = (props) => {
    const description = props.description ? (<p>{props.description}</p>) : "";

    return (
        <section className={style.gameCardContainer}>
            <img src={props.img} alt={props.title} />
            <article className="gameCard">
                <h3>{props.title}</h3>
                {description}
                <GenericLink>Read More</GenericLink>
            </article>
            <article>
                <img src={props.platform === "Web Browser" ? BrowserIcon : windowsIcon} alt="platform icon" />
                <p>{props.genre}</p>
            </article>
        </section>
    );
}

export default GameItem_EX;