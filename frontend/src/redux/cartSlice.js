import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Reducers are the function which are used to mutate the state.
    add(state, action) {
      // Redux: we can directly mutate state using redux toolkit.
      const productObj = action.payload;
      const product = state.find((item) => item.code === productObj.code);
      if (product) {
        product.qty++;
      } else {
        const obj = { ...productObj, qty: 1 };
        state.push(obj);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.code !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
