import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
	meals: [],
	totalQuantity: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialCartState,
	reducers: {
		addMealsToCart(state, action) {
			const newMeal = action.payload;
			const existingMeal = state.meals.find(meal => meal.id === newMeal.id);
			state.totalQuantity++;
			if (!existingMeal) {
				state.meals.push({
					id: newMeal.id,
					price: newMeal.price,
					quantity: newMeal.quantity,
					name: newMeal.title,
					totalPrice: newMeal.price,
				});
			} else {
				existingMeal.quantity++;
				existingMeal.totalPrice = existingMeal.totalPrice + newMeal.price;
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
