import { createSlice } from '@reduxjs/toolkit';
import { productT } from '../types/types';

const defaultState: { products: productT[] } = {
  products: [
    { id: 1, title: 'Велосипед', count: 5 },
    { id: 2, title: 'Самокат', count: 4 },
    { id: 3, title: 'Гантели', count: 7 },
    { id: 4, title: 'Ракетки', count: 1 },
  ],
};

const productsSlice = createSlice({
  name: 'counter',
  initialState: defaultState,
  reducers: {
    add(state, action: { payload: { name: string } }) {
      if (action.payload.name === 'Вы не ввели название!'){
        alert('Вы ничего не ввели!')
      } else {
        state.products.push({ id: Date.now(), title: action.payload.name, count: 1 });
      }
    },
    changeCount(state, action: { payload: { id: number; count: number } }) {
      state.products.forEach(e => {
        if (e.id === action.payload.id) {
          e.count += action.payload.count;
          if (e.count > 25) {
            e.count = 25;
            alert('Нельзя больше 25!')
          }
          if (e.count < 1) {
            e.count = 0;
            state.products.splice(
              state.products.findIndex(arrow => arrow.id === action.payload.id),
              1,
            );
          }
        }
      });
    },
  },
});

export const { add, changeCount } = productsSlice.actions;

export default productsSlice.reducer;
