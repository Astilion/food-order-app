import styles from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

interface CartItemProps {
	meal: {
		id: string;
		title: string;
		quantity: number;
		totalPrice: number;
		price: number;
	};
}

const CartItem = (props: CartItemProps) => {
	const dispatch = useDispatch();
	const { title, quantity, totalPrice, price, id } = props.meal;
	const removeMealHandler = () => {
		dispatch(cartActions.removeMealsFromCart(id));
	};

	const addMealHandler = () => {
		dispatch(
			cartActions.addMealsToCart({
				id,
				title,
				price,
			})
		);
	};
	return (
		<li className={styles["cart-item"]}>
			<h2>{title}</h2>
			<div className={styles.summary}>
				<span className={styles.price}>${totalPrice.toFixed(2)}</span>
				<span className={styles.amount}>x {quantity}</span>
			</div>

			<div className={styles.actions}>
				<button onClick={removeMealHandler}>-</button>
				<button onClick={addMealHandler}>+</button>
			</div>
		</li>
	);
};

export default CartItem;
