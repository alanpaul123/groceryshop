import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartFoods",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingFood = state.find((food) => food.id == action.payload.id);

      if (existingFood) {
        const remainingFoods = state.filter(
          (item) => item.id != existingFood.id
        );
        existingFood.quantity++;
        existingFood.totalPrice = existingFood.quantity * existingFood.price;
        state = [...remainingFoods, existingFood];
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    removeCartItem: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
    incQuantity: (state, action) => {
      const existingFood = state.find((item) => item.id == action.payload);

      existingFood.quantity++;
      existingFood.totalPrice = existingFood.price * existingFood.quantity;

      const remainingFood = state.filter((item) => item.id != action.payload);

      state = [...remainingFood, existingFood];
    },

    decQuantity: (state, action) => {
      const existingFood = state.find((item) => item.id == action.payload);

      existingFood.quantity--;
      existingFood.totalPrice = existingFood.price * existingFood.quantity;

      const remainingFood = state.filter((item) => item.id != action.payload);

      state = [...remainingFood, existingFood];
    },
  },
});

export const { addToCart, removeCartItem, incQuantity, decQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
