import styles from "./Header.CartButton";
import CartIcon from "../../../../mealsproject-all-before-redux/src/components/Cart/CartIcon";
const HeaderCartButton = props => {
	const btnClasses = `${classes.button} ${
		btnIsHighlighted ? classes.bump : ""
	}`;
	return (
		<button className={btnClasses}>
			<span>
				<i className={styles.icon}>
					<CartIcon />
				</i>
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>3</span>
		</button>
	);
};

export default HeaderCartButton;
