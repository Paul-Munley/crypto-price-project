import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResults } from "../../store/search-actions";
import { searchActions } from "../../store/search-slice";
import classes from "./SearchList.module.css";
import SearchItem from "./SearchItem";
import LoadingSpinner from "../UI/LoadingSpinner";

const SearchList = props => {
  const dispatch = useDispatch();
  const { coinSearchArray, filteredArray, searchQuery } = useSelector(
    state => state.search
  );
  const searchFieldEmpty = searchQuery === "";
  const coinSearchArrayEmpty = coinSearchArray.length === 0;

  useEffect(() => {
    if (searchFieldEmpty && coinSearchArrayEmpty) {
      dispatch(fetchSearchResults());
    }
    if (!searchFieldEmpty) {
      dispatch(searchActions.filterSearchResults());
    }
  }, [searchFieldEmpty]);

  console.log(coinSearchArray);

  return (
    <div className={classes.box}>
      {coinSearchArrayEmpty ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {(searchFieldEmpty ? coinSearchArray : filteredArray).map(coin => {
            return <SearchItem key={coin.id} coin={coin} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchList;
