import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slicer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});