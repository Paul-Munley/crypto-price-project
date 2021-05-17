import { useState } from "react";
import useComponentVisible from "../../hooks/useComponentVisible";
import Card from "../UI/Card";
import SearchList from "./SearchList";
import classes from "./Search.module.css";

const Search = props => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const [searchQuery, setSearchQuery] = useState("");

  const setSearchToVisible = () => {
    setIsComponentVisible(true);
  };

  const updateSearchResults = e => {
    setSearchQuery(e.target.value);
  };
  // console.log(searchQuery);

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
          value={searchQuery}
        />
        {isComponentVisible && (
          <div ref={ref}>
            <SearchList searchQuery={searchQuery} />
          </div>
        )}
      </div>
    </Card>
  );
};

export default Search;
