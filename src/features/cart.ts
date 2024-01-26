import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart } from "../types/Cart";

const initialState: Cart[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (cart, action: PayloadAction<Cart>) => [...cart, action.payload],
    remove: (cart, action: PayloadAction<string>) => cart.filter((item) => item.id !== action.payload),
    clear: () => [],
    plus: (cart, action: PayloadAction<Cart>) => cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }

      return item;
    }),
    minus: (cart, action: PayloadAction<Cart>) => cart.map(item => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      }

      return item;
    })
  }
});

export const { actions } = cartSlice;
export default cartSlice.reducer;
