import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  amount: number;
  img: string;
}

interface CartSlice {
  cart: CartItem[];
  amount: number;
  total: number;
}

const localCart: CartItem[] = JSON.parse(localStorage.getItem('cart')!) || [];

const initialState: CartSlice = {
  cart: localCart,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const cart_item = state.cart.find(
        (item) => action.payload.name === item.name
      );

      if (!!cart_item) {
        cart_item.amount += action.payload.amount;
      } else {
        state.cart.push(action.payload);
      }

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem('cart');
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    incItemAmount: (state, action) => {
      state.cart.map((item) => {
        if (item.id === action.payload) {
          item.amount += 1;
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    decItemAmount: (state, action) => {
      state.cart.map((item) => {
        if (item.id === action.payload) {
          item.amount -= 1;
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    toggleCartInfo: (state) => {
      const { amount, total } = state.cart.reduce(
        (acc, curr) => {
          acc.amount += curr.amount;
          acc.total += curr.amount * curr.price;
          return acc;
        },
        { amount: 0, total: 0 }
      );

      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  addItemToCart,
  clearCart,
  deleteItem,
  incItemAmount,
  decItemAmount,
  toggleCartInfo,
} = cartSlice.actions;
export default cartSlice.reducer;
