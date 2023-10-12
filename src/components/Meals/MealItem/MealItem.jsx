import styles from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
const MealItem = props => {
	const dispatch = useDispatch();
	const { name , price, description , id} = props

	const addToCartHandler = amount => {
		dispatch(
			cartActions.addMealsToCart({
				id: id,
				quantity: amount,
				name: name,
				price: price,
			})
		);
	};
	return (
		<li className={styles.meal}>
			<div>
				<h3>{name}</h3>
				<p className={styles.description}>{description}</p>
				<p className={styles.price}>${price.toFixed(2)}</p>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
