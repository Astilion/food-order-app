import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
	id: string;
	price: number;
	quantity: number;
	totalPrice: number;
	name: string;
}
interface CartState {
	meals: CartItem[];
	totalQuantity: number;
}

const initialCartState: CartState = {
	meals: [],
	totalQuantity: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialCartState,
	reducers: {
		addMealsToCart(state, action: PayloadAction<CartItem>) {
			const newMeal = action.payload;
			const existingMeal = state.meals.find(meal => meal.id === newMeal.id);

			if (!existingMeal) {
				state.totalQuantity++;
				state.meals.push({
					id: newMeal.id,
					price: newMeal.price,
					quantity: 1,
					totalPrice: newMeal.price,
					name: newMeal.name,
				});
			} else {
				state.totalQuantity++;
				existingMeal.quantity++;
				existingMeal.totalPrice = existingMeal.totalPrice + newMeal.price;
			}
		},
		removeMealsFromCart(state, action: PayloadAction<string>) {
			const id = action.payload;
			const existingMeal = state.meals.find(meal => meal.id === id);
			state.totalQuantity--;

			if (existingMeal.quantity === 1) {
				state.meals = state.meals.filter(meal => meal.id !== id);
			} else {
				existingMeal.quantity--;
				existingMeal.totalPrice = existingMeal.totalPrice - existingMeal.price;
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
