import Card from '../UI/Card';
import styles from './AvailableMeals.module.scss'

const AvailableMeals = (props) => {
    return (
        <Card>
            <section className={styles.meals}>
                <ul>
                </ul>
            </section>
        </Card>
    )
}

export default AvailableMeals;