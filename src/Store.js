import { configureStore, createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorites(state, action) {
      const exists = state.find(item => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const exists = state.find(item => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
  }
});

export const { addToFavorites } = favoritesSlice.actions;
export const { addToCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;