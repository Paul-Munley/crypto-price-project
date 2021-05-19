import classes from "./SearchItem.module.css";

const SearchItem = props => {
  const searchFieldEmpty = props.searchQuery === "";

  return (
    <li>
      <a>
        {searchFieldEmpty && <img src={props.coin.thumbnail} />}
        <div className={classes.name}>{props.coin.name}</div>
        <div className={classes.symbol}>{`(${props.coin.symbol})`}</div>
        {searchFieldEmpty && (
          <div className={classes.rank}>{`#${props.coin.rank}`}</div>
        )}
      </a>
    </li>
  );
};

export default SearchItem;
