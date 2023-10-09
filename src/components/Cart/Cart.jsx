import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import styles from "./Cart.module.scss";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
const Cart = props => {
	const dispatch = useDispatch();
	const closeCartHandler = () => {
		dispatch(uiActions.toggleCart());
	};
	return (
		<Modal>
			<ul className={styles["cart-items"]}>
				<CartItem />
			</ul>
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>505</span>
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
