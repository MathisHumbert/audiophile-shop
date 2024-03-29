import { configureStore } from '@reduxjs/toolkit';

import asideReducer from '../features/aside/asideSlice';
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    aside: asideReducer,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
