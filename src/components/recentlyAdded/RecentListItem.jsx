import style from './RecentListItem.module.scss';
import Button from '../buttons/GenericButton';
import windowsIcon from "../../assets/images/icon_windows.svg";
import browserIcon from '../../assets/images/icon_browser.svg';


const RecentListItem = (props) => {
    return (
        <article className={style.listItem_container}>
            <img src={props.image} alt={props.title} />
            <div>
                <h3>{props.title}</h3>
                <Button>READ MORE</Button>
            </div>
            <hr />
            <div>
                <img src={props.platform === "Web Browser" ? browserIcon : windowsIcon} alt="platform icon" />
                <p>{props.genre}</p>
            </div>
        </article>
    );
}

export default RecentListItem;