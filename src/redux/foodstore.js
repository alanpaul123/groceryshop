import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "../redux/slices/foodSlice";
import cartSlice from "../redux/slices/cartSlice";

const foodStore = configureStore({
  reducer: {
    foodReducer: foodSlice,
    cartReducer: cartSlice,
  },
});

export default foodStore;
