import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";
import { useItemOnScreen } from "../../hooks/useItemOnScreen";
import Card from "../UI/Card";
import SearchList from "./SearchList";
import classes from "./Search.module.css";
import { bindActionCreators } from "redux";

const Search = props => {
  // TODO For next time you work on this, try attempting to move your reference to your search list clicks to the search list. Was getting a refs cannot be added to Components. Adding this to the main outside div inside of our SearchList component along with passing state up to this component that represnts the list being currently on the page should be a  fix to this issue while allowing you to make sure that the search list of coins stays open when clicked on. As opposed to it just treating the search list click as an on blur event only.
  const searchList = useRef();
  console.log(searchList.current);
  // const onScreen = useItemOnScreen(searchList);
  const { searchBarStatus } = useSelector(state => state.search);
  const dispatch = useDispatch();

  const toggleSearchHandler = e => {
    if (e.target.className === "input") console.log("Hello");
    dispatch(searchActions.toggleSearchBar());
  };

  // console.log(onScreen);

  return (
    <Card>
      <div className={classes.search}>
        <h2>Search For A Cryptocurrency</h2>
        <input
          className="input"
          type="text"
          placeholder="Search.."
          onFocus={toggleSearchHandler}
          onBlur={toggleSearchHandler}
        />
        {searchBarStatus && <SearchList ref={searchList} />}
      </div>
    </Card>
  );
};

export default Search;
