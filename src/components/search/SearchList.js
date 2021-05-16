import { useEffect, useState } from "react";
import useFetch from "../../hooks/use-fetch";
import classes from "./SearchList.module.css";
import SearchItem from "./SearchItem";

const SearchList = props => {
  // const [clickedInSearchList, setClickedInSearchList] = useState(false);
  const [loadedList, setLoadedList] = useState([]);
  const { isLoading, error, sendRequest } = useFetch();

  const clickedInSearchListHandler = e => {
    e.preventDefault();
    props.onClickInSearchList(true);
  };

  useEffect(() => {
    const transformData = fetchedData => {
      const coinsList = fetchedData.coins;
      const topCoinsArray = [];

      coinsList.forEach(coin => {
        topCoinsArray.push({
          id: coin.item.id,
          icon: coin.item.icon,
          name: coin.item.name,
          symbol: coin.item.symbol,
          rank: coin.item.rank,
        });
      });

      setLoadedList(topCoinsArray);
    };

    sendRequest(
      { url: "https://api.coingecko.com/api/v3/search/trending" },
      transformData
    );
  }, [sendRequest]);

  return (
    <div className={classes.box} onClick={clickedInSearchListHandler}>
      <ul>
        {loadedList.map(coin => {
          return <SearchItem key={coin.id} coin={coin} />;
        })}
      </ul>
    </div>
  );
};

export default SearchList;
