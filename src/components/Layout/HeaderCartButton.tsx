import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HeaderCartButton.module.scss";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = () => {
	const dispatch = useDispatch();
	const cartButtonHandler = () => {
		dispatch(uiActions.toggleCart());
	};
	const numberOfCartItems = useSelector(
		(state: RootState) => state.cart.totalQuantity
	);

	return (
		<button onClick={cartButtonHandler} className={styles.button}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
