import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResults } from "../../store/search-actions";
import { searchActions } from "../../store/search-slice";
import classes from "./SearchList.module.css";
import SearchItem from "./SearchItem";

const SearchList = props => {
  const dispatch = useDispatch();
  const { coinSearchArray, filteredArray, searchQuery } = useSelector(
    state => state.search
  );
  const searchFieldEmpty = searchQuery === "";

  useEffect(() => {
    if (searchFieldEmpty && coinSearchArray.length === 0) {
      dispatch(fetchSearchResults());
    }
    if (!searchFieldEmpty) {
      dispatch(searchActions.filterSearchResults());
    }
  }, [searchFieldEmpty]);

  console.log(coinSearchArray);

  return (
    <div className={classes.box}>
      {
        <ul>
          {(searchFieldEmpty ? coinSearchArray : filteredArray).map(coin => {
            return <SearchItem key={coin.id} coin={coin} />;
          })}
        </ul>
      }
    </div>
  );
};

export default SearchList;
