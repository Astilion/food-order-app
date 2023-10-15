import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
	showCart: boolean;
}

const initialToggleState: UiState = {
	showCart: false,
};

const uiSlice = createSlice({
	name: "ui",
	initialState: initialToggleState,
	reducers: {
		toggleCart(state) {
			state.showCart = !state.showCart;
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
