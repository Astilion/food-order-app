import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HeaderCartButton.module.scss";
import CartIcon from "../../../../mealsproject-all-before-redux/src/components/Cart/CartIcon";
const HeaderCartButton = props => {
	const dispatch = useDispatch()
	const cartButtonHandler = () =>{
		dispatch(uiActions.toggleCart())
	}
	const numberOfCartItems = useSelector((state) => state.cart.totalQuantity)

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
