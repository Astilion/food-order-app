import styles from "./Cart.module.scss";
import Card from "../UI/Card";
const Cart = props => {
	return (
		<Card>
			<ul className={styles["cart-items"]}>
				<li>ITEM</li>
			</ul>
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>505</span>{" "}
			</div>
			<div className={styles.actions}>
				<button className={styles["button--alt"]}>Close</button>
				<button className={styles.button}>Order</button>
			</div>
		</Card>
	);
};

export default Cart;
