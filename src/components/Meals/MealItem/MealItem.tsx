import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.scss";

interface MealItemProps {
	id: string;
	name: string;
	price: number;
	description: string;
}

const MealItem: React.FC<MealItemProps> = ({
	id,
	name,
	price,
	description,
}) => {
	const dispatch = useDispatch();

	const addToCartHandler = (amount: number) => {
		dispatch(
			cartActions.addMealsToCart({
				id,
				quantity: amount,
				name,
				price,
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
