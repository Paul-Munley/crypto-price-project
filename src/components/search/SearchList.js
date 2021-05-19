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
  const { coinSearchArray } = useSelector(state => state.search);
  const searchFieldEmpty = props.searchQuery === "";
  console.log(searchFieldEmpty);

  useEffect(() => {
    if (searchFieldEmpty) {
      dispatch(fetchSearchResults(true));
    }
    if (!searchFieldEmpty) {
      dispatch(fetchSearchResults(false));
    }
  }, [searchFieldEmpty]);

  console.log(coinSearchArray);

  return (
    <div className={classes.box}>
      {
        <ul>
          {coinSearchArray.map(coin => {
            return (
              <SearchItem
                key={coin.id}
                coin={coin}
                searchQuery={props.searchQuery}
              />
            );
          })}
        </ul>
      }
    </div>
  );
};

export default SearchList;
