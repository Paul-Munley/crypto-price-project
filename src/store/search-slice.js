import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingSearchArray: [],
  coinSearchArray: [],
  filteredArray: [],
  searchQuery: "",
};

const searchSlice = createSlice({
  name: "search slice",
  initialState,
  reducers: {
    setTrendingResults(state, action) {
      state.trendingSearchArray = action.payload.coinSearchArray;
    },
    setSearchResults(state, action) {
      state.coinSearchArray = action.payload.coinSearchArray;
      state.filteredArray = action.payload.coinSearchArray;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    filterSearchResults(state, action) {
      state.filteredArray = state.coinSearchArray.filter(coin =>
        coin.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
