const SearchItem = props => {
  return (
    <li>
      <span>{props.coin.icon}</span>
      <span>{props.coin.name}</span>
      <span>{props.coin.symbol}</span>
      <span>{props.coin.rank}</span>
    </li>
  );
};

export default SearchItem;
