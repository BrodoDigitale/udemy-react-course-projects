import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui-slice";
import { cartSlice } from "./cart-slice";



export const store = configureStore({
    //single reducer or a map of reducers
    reducer: { 
       ui:  uiSlice.reducer,
       cart: cartSlice.reducer,
    }
})