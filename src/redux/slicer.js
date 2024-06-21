import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        add(state, action){
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        increment(state, action){
            const item = state.cart.find((item) => item.id === action.payload.id);
            item.quantity++;
        },
        decrement(state, action){
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item.quantity > 1) {
                item.quantity--;
            }
            else if (item.quantity === 1) {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            }
        },
        remove(state, action){
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        clear(state){
            state.cart = [];
        },
    },
});

export const { add, increment, decrement, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;