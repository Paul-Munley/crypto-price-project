import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";
import useComponentVisible from "../../hooks/useComponentVisible";
import Card from "../UI/Card";
import SearchList from "./SearchList";
import classes from "./Search.module.css";

const Search = props => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const dispatch = useDispatch();
  const { searchQuery } = useSelector(state => state.search);

  const setSearchToVisible = () => {
    setIsComponentVisible(true);
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
        {isComponentVisible && (
          <div ref={ref}>
            <SearchList />
          </div>
        )}
      </div>
    </Card>
  );
};

export default Search;
