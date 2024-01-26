import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product";
import { getProduct } from "../utils/fetchProduct";

type productState = {
  products: Product[],
  loading: boolean,
  error: string,
};

const initialState: productState = {
  products: [],
  loading: false,
  error: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = 'Something went wrong';
    });
  }
})

export default productSlice.reducer;
export const { actions } = productSlice;

export const init = createAsyncThunk('products/fetch', () => {
  return getProduct();
})