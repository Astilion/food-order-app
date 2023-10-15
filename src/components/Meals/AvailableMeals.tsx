import Card from '../UI/Card';
import styles from './AvailableMeals.module.scss'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS: MealItem[] = [
    {
        id: 'm1',
        title: 'Sushi',
        description: 'Fresh fish with rice!',
        price: 22.99,
    },
    {
        id: 'm2',
        title: 'Schnitzel',
        description: 'a german speciality',
        price: 16.50,
    },
    {
        id: 'm3',
        title: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        title: 'Green Bowl',
        description: 'Healthy... and green...',
        price: 18.99,
    }
]
const AvailableMeals = () => {
    return (
        <Card>
            <section className={styles.meals}>
                <ul>
                    {DUMMY_MEALS.map(meal => <MealItem key={meal.id} id= {meal.id} name={meal.title} description={meal.description} price={meal.price}/> )}

                </ul>
            </section>
        </Card>
    )
}

export default AvailableMeals;