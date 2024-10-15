import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchFood = createAsyncThunk("food/fetchFood", async () => {
  const result = await axios.get(
    "https://groceryserver-nv6x.onrender.com/foods"
  );
  localStorage.setItem("allFoods", JSON.stringify(result.data));
  return result.data;
});

const foodSlice = createSlice({
  name: "foods",
  initialState: {
    allFoods: [],
    loading: false,
    error: "",
    allFoodsDummy: [],
  },
  reducers: {
    searchFood: (state, action) => {
      state.allFoods = state.allFoodsDummy.filter((food) =>
        food.type.toLowerCase().includes(action.payload)
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchFood.fulfilled, (state, action) => {
      state.allFoods = action.payload;
      state.allFoodsDummy = action.payload;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(fetchFood.pending, (state, action) => {
      state.allFoods = [];
      state.allFoodsDummy = [];
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchFood.rejected, (state, action) => {
      state.allFoods = [];
      state.allFoodsDummy = [];
      state.loading = false;
      state.error = "API call Failed ...Please try again after sometime....";
    });
  },
});

export const { searchFood } = foodSlice.actions;
export default foodSlice.reducer;
