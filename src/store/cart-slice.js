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
			console.log("addMealsToCart reducer: action.payload =", action.payload);
			const newMeal = action.payload;
			const existingMeal = state.meals.find(meal => meal.id === newMeal.id);
			state.totalQuantity++;
			if (!existingMeal) {
				state.meals.push({
					id: newMeal.id,
					price: newMeal.price,
					quantity: 1,
					totalPrice: newMeal.price,
					name: newMeal.title,
				});
			} else {
				existingMeal.quantity++;
				existingMeal.totalPrice = existingMeal.totalPrice + newMeal.price;
			}
		},
		removeMealsFromCart(state, action) {
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
