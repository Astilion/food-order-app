import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import styles from "./Cart.module.scss";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
const Cart = props => {
	const cartMeals = useSelector(state => state.cart.meals);
	console.log("Cart component: cartMeals =", cartMeals.map(meal => meal))
	const dispatch = useDispatch();
	const closeCartHandler = () => {
		dispatch(uiActions.toggleCart());
	};

	const totalAmount = cartMeals.reduce((total, meal) => {
		return total + meal.totalPrice}, 0)

	return (
		<Modal>
			<ul className={styles["cart-items"]}>
				{cartMeals.map(meal => (
					<CartItem
						key={meal.id}
						meal={{
							id: meal.id,
							title: meal.name,
							quantity: meal.quantity,
							totalPrice: meal.totalPrice,
							price: meal.price,
						}}
					/>
				))}
			</ul>
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount.toFixed(2)}</span>
			</div>
			<div className={styles.actions}>
				<button onClick={closeCartHandler} className={styles["button--alt"]}>
					Close
				</button>
				<button className={styles.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
