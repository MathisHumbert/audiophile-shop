import { configureStore } from '@reduxjs/toolkit';
import asideReducer from '../features/aside/asideSlice';

const store = configureStore({
  reducer: {
    aside: asideReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
