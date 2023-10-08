import styles from "./CartItem.module.scss";

const CartItem = props => {
	return (
		<li className={styles["cart-item"]}>
			<h2>dummy heading</h2>
			<div className={styles.summary}>
				<span className={styles.price}>999</span>
				<span className={styles.amount}>x</span>
			</div>

			<div className={styles.actions}>
				<button>-</button>
				<button>+</button>
			</div>
		</li>
	);
};

export default CartItem;
