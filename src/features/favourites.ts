import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product";

const initialState: Product[] = [];

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    add: (favourites, action: PayloadAction<Product>) => [...favourites, action.payload],
    remove: (favourites, action: PayloadAction<Product>) => favourites.filter(item => item.id !== action.payload.id)
  }
});

export default favouritesSlice.reducer;
export const { actions } = favouritesSlice;