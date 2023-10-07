import styles from "./HeaderCartButton.module.scss";
import CartIcon from "../../../../mealsproject-all-before-redux/src/components/Cart/CartIcon";
const HeaderCartButton = props => {
	return (
		<button className={styles.button}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>3</span>
		</button>
	);
};

export default HeaderCartButton;
