import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from '@/states/actions/CounterState';

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

/* export const counterStore = (state: RootState) => state.CouterReducer; */
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
