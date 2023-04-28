import windowsIcon from "../../assets/images/icon_windows.svg"
import BrowserIcon from "../../assets/images/icon_browser.svg"
import GenericLink from "../buttons/GenericLink.jsx";
import FilterTag from "../FilterTag";

const TopGamesPCItem = (props) => {
    const description = props.description ? (<p>{props.description}</p>) : "";

    return (
        <section >
            <img src={props.img} alt={props.title} />
            <article>
                <h3>{props.title}</h3>
                {description}
                <GenericLink>READ MORE</GenericLink>
                <p>{props.id}</p>
                <div></div>
            </article>
            <article>
                <FilterTag img={props.platform === "Web Browser" ? BrowserIcon : windowsIcon} />
                <FilterTag text={props.genre} />
            </article>
        </section>
    );
}

export default TopGamesPCItem;