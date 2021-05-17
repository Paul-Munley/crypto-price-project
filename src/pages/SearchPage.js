import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../store/search-slice";
import Search from "../components/search/Search";

const SearchPage = () => {
  const { searchBarStatus } = useSelector(state => state.search);
  const dispatch = useDispatch();

  // const clickOutsideSearchHandler = e => {
  //   // const approvedClickAreas =
  //   //   e.target.className === "input" ||
  //   //   e.target.closest("div").className.includes("SearchList_box");
  //   console.log(e.target.className);

  //   const isNotInTargetLocations =
  //     !e.target.closest("div").className.includes("SearchList_box") &&
  //     !e.target.className === "input";

  //   console.log(isNotInTargetLocations);
  //   // if (searchBarStatus) {
  //   //   dispatch(searchActions.turnOffSearchBar());
  //   // }
  // };

  return (
    <div /* onClick={clickOutsideSearchHandler} */>
      <Search />
    </div>
  );
};

export default SearchPage;
