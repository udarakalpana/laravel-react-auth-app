import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, IProductDetails } from "../../types/product/product";

const initialState: CartState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IProductDetails>) {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id,
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        // removeFromCart(state, action: PayloadAction<number>) {
        //     state.cartItems = state.cartItems.filter(
        //         (item) => item.id !== action.payload
        //     );
        // },
        clearCart(state) {
            state.cartItems = [];
        },
    },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
