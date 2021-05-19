import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coinSearchArray: [],
};

const searchSlice = createSlice({
  name: "search slice",
  initialState,
  reducers: {
    setTrendingSearchResults(state, action) {
      state.coinSearchArray = action.payload.coinSearchArray;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
