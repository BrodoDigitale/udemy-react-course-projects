import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addProductToCart(state, action) {
      state.totalQuantity++;
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + item.price;
      } else {
        state.items.push({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
          totalPrice: item.price,
        });
      }
    },
    removeProductFromCart(state, action) {
      state.totalQuantity--;
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((i) => i.id === id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotificiation({
        status: "pending",
        title: "Sending...",
        msg: "Sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://64ea398abf99bdcc8e676b68.mockapi.io/cart/1",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        dispatch(
          uiActions.setNotificiation({
            status: "error",
            title: "Error",
            msg: "Sending dta failed",
          })
        );
        throw new Error("Sending data failed");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.setNotificiation({
          status: "error",
          title: error.name || "Error",
          msg: error.message || "Error occured",
        })
      );
    }

    dispatch(
      uiActions.setNotificiation({
        status: "success",
        title: "Success",
        msg: "Cart data sent",
      })
    );
  };
};

export const cartActions = cartSlice.actions;
