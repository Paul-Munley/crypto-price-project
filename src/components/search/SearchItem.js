import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchActions } from "../../store/search-slice";
import useComponentVisible from "../../hooks/useComponentVisible";
import classes from "./SearchItem.module.css";

const SearchItem = props => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector(state => state.search);
  const searchFieldEmpty = searchQuery === "";

  const switchToCoinDetail = () => {
    dispatch(searchActions.toggleSearch());
  };

  return (
    <li>
      <Link onClick={switchToCoinDetail} to={`/${props.coin.id}`}>
        <img src={props.coin.thumbnail} width="30" height="30" />
        <div className={classes.name}>{props.coin.name}</div>
        <div className={classes.symbol}>{`(${props.coin.symbol})`}</div>
      </Link>
    </li>
  );
};

export default SearchItem;
