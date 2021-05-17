import { useEffect, useState } from "react";
import useFetch from "../../hooks/use-fetch";
import classes from "./SearchList.module.css";
import SearchItem from "./SearchItem";

const SearchList = props => {
  const [loadedList, setLoadedList] = useState([]);
  const { isLoading, error, sendRequest } = useFetch();

  useEffect(() => {
    const searchQueryIsEmpty = props.searchQuery === "";
    const transformData = fetchedData => {
      const coinsList = fetchedData.coins;
      const topCoinsArray = [];

      coinsList.forEach(coin => {
        topCoinsArray.push({
          id: coin.item.id,
          thumbnail: searchQueryIsEmpty ? coin.item.thumb : "",
          name: coin.item.name,
          symbol: coin.item.symbol,
          rank: searchQueryIsEmpty ? coin.item.market_cap_rank : "",
        });
      });

      if (searchQueryIsEmpty) {
        setLoadedList(topCoinsArray);
      } else {
        console.log(topCoinsArray);
      }
    };

    if (searchQueryIsEmpty) {
      sendRequest(
        { url: "https://api.coingecko.com/api/v3/search/trending" },
        transformData
      );
    } else {
      sendRequest(
        {
          url: "https://api.coingecko.com/api/v3/coins/list?include_platform=false",
        },
        transformData
      );
    }
  }, [sendRequest, props.searchQuery]);

  return (
    <div className={classes.box}>
      <ul>
        {loadedList.map(coin => {
          return <SearchItem key={coin.id} coin={coin} />;
        })}
      </ul>
    </div>
  );
};

export default SearchList;
