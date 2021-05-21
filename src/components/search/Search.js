import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchActions } from "../../store/search-slice";
import useComponentVisible from "../../hooks/useComponentVisible";
import Card from "../UI/Card";
import SearchList from "./SearchList";
import classes from "./Search.module.css";

const Search = props => {
  const { ref } = useComponentVisible();
  const dispatch = useDispatch();
  const { searchQuery, searchVisiblility } = useSelector(state => state.search);
  const location = useLocation();

  console.log(location);

  const setSearchToVisible = () => {
    dispatch(searchActions.toggleSearch());
  };

  const updateSearchResults = e => {
    e.preventDefault();
    dispatch(searchActions.setSearchQuery(e.target.value));
  };

  useEffect(
    useCallback(() => {
      dispatch(searchActions.filterSearchResults());
    }),
    [searchQuery]
  );
  console.log(searchQuery);

  // useEffect(() => {
  //   if (searchQuery.length > 0)
  //     dispatch(searchActions.filterSearchResults(searchQuery));
  // }, [dispatch, searchQuery]);

  return (
    <Card>
      <div className={classes.search}>
        <h2>Search For A Cryptocurrency</h2>
        <input
          className="input"
          type="text"
          placeholder="Search.."
          onClick={setSearchToVisible}
          onChange={updateSearchResults}
        />
        {searchVisiblility && (
          <div ref={ref}>
            <SearchList />
          </div>
        )}
      </div>
    </Card>
  );
};

export default Search;
