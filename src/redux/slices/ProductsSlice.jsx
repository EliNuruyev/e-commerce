import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  allProducts: [],
  categoryActive: false,
};

export const getProducts = createAsyncThunk("getProducts", async (url) => {
  const res = await fetch(url ? `https://fakestoreapi.com/products/category/${url}` : "https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

export const forPrice = createAsyncThunk("forPrice", async (value) => {
  const res = await fetch(`https://fakestoreapi.com/products?sort=${value}`);
  const data = await res.json();
  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    handleCategory: (state, action) => {
      state.products = state.allProducts.filter(product => product.category === action.payload);
      state.categoryActive = true;
    },
    handleSearch: (state, action) => {
      state.products = state.allProducts.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()));
    },
    resetProducts: (state) => {
      state.products = state.allProducts;
      state.categoryActive = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.allProducts = action.payload;
    });
    builder.addCase(forPrice.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { handleCategory, handleSearch, resetProducts } = productsSlice.actions;
export default productsSlice.reducer;
