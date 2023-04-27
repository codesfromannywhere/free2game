import style from './RecentListItem.module.scss';
import Button from '../buttons/GenericButton';

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
                <p>{props.platform}</p>
                <p>{props.genre}</p>
            </div>
        </article>
    );
}

export default RecentListItem;