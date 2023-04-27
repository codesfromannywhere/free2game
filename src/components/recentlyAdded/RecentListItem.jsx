import style from './RecentListItem.module.scss'

const RecentListItem = (props) => {
    return (
        <article className={style.listItem_container}>
            <div>
                <img src={props.image} alt={props.title} />
                <h3>{props.title}</h3>
                <button>READ MORE</button>
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