import styles from './MealItem.module.scss'
const MealItem = (props) => {
    return (
        <li className={styles.meal}>
            <div>
            <h3>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
            <p className={styles.price}>{props.price}</p>
            </div>
        </li>
    )
}

export default MealItem;