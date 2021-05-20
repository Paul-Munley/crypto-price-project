import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResults } from "../../store/search-actions";
import { searchActions } from "../../store/search-slice";
import useFetch from "../../hooks/use-fetch";
import dynamicSearchHelpers from "../../helpers/dynamicSearchHelpers";
import classes from "./SearchList.module.css";
import SearchItem from "./SearchItem";

const SearchList = props => {
  const dispatch = useDispatch();
  const { trendingSearchArray, coinSearchArray, filteredArray, searchQuery } =
    useSelector(state => state.search);
  const searchFieldEmpty = searchQuery === "";

  useEffect(() => {
    if (searchFieldEmpty && trendingSearchArray.length === 0) {
      dispatch(fetchSearchResults(true));
    }
    if (!searchFieldEmpty && coinSearchArray.length === 0) {
      dispatch(fetchSearchResults(false));
    }
  }, [searchFieldEmpty]);

  useEffect(() => {});

  console.log(coinSearchArray);

  return (
    <div className={classes.box}>
      {
        <ul>
          {(searchFieldEmpty ? trendingSearchArray : filteredArray).map(
            coin => {
              return <SearchItem key={coin.id} coin={coin} />;
            }
          )}
        </ul>
      }
    </div>
  );
};

export default SearchList;
