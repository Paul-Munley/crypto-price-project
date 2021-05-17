import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchBarStatus: false,
  clickOutsideOfSearch: false,
};

const searchSlice = createSlice({
  name: "search slice",
  initialState,
  reducers: {
    turnOnSearchBar(state) {
      state.searchBarStatus = true;
    },
    turnOffSearchBar(state) {
      if (state.searchBarStatus === true) {
        state.searchBarStatus = false;
      }
    },
    toggleSearchBar(state) {
      state.searchBarStatus = !state.searchBarStatus;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
