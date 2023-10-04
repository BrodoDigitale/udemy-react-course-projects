import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProductToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if(existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + item.price;

      } else {
        state.productsInCart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
            totalPrice: item.price
        });
      }
    },
    removeProductFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      if(existingItem.quantity === 1) {
        state.items = state.items.filter(i => i.id === id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
