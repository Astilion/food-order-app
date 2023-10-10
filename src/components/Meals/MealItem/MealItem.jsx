import styles from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
const MealItem = props => {
	const dispatch = useDispatch();

	const addToCartHandler = amount => {
		dispatch(
			cartActions.addMealsToCart({
				id: props.id,
				amount: amount,
				name: props.name,
				price: props.price,
			})
		);
	};
	return (
		<li className={styles.meal}>
			<div>
				<h3>{props.title}</h3>
				<p className={styles.description}>{props.description}</p>
				<p className={styles.price}>{props.price}</p>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
