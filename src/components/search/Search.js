import { useState } from "react";
import Card from "../UI/Card";
import SearchList from "./SearchList";
import classes from "./Search.module.css";

const Search = () => {
  const [searchStatus, setSearchStatus] = useState(false);

  const turnOnSearchHandler = () => {
    setSearchStatus(true);
  };

  const onClickInSearchList = () => {
    setSearchStatus(true);
  };

  const turnOffSearchHandler = () => {
    setSearchStatus(false);
  };

  return (
    <Card>
      <div className={classes.search}>
        <h2>Search For A Cryptocurrency</h2>
        <input
          type="text"
          placeholder="Search.."
          onFocus={turnOnSearchHandler}
          onBlur={turnOffSearchHandler}
        />
        {searchStatus && (
          <SearchList onClickInSearchList={onClickInSearchList} />
        )}
      </div>
    </Card>
  );
};

export default Search;
