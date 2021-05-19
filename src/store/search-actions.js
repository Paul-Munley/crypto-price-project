import { searchActions } from "./search-slice";

const transformDataAndPush = (data, coinsArray, showTrending) => {
  if (showTrending) {
    data.forEach(coin =>
      coinsArray.push({
        id: coin.item.id,
        thumbnail: coin.item.thumb,
        name: coin.item.name,
        symbol: coin.item.symbol,
        rank: coin.item.market_cap_rank,
      })
    );
  }

  if (!showTrending) {
    const shortsAndLongs = new RegExp(/\d.{0,3}[X]/);
    const aaveCoins = new RegExp(/(Aave) .{1,}/);
    const theMainBitcoins =
      /(Bitcoin Cash)/ && /(Bitcoin Gold)/ && /(Bitcoin SV)/;

    data
      .filter(
        coin =>
          (!shortsAndLongs.test(coin.name) && !aaveCoins.test(coin.name)) ||
          !theMainBitcoins.test(coin.name)
      )
      .forEach(coin => {
        coinsArray.push({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol,
        });
      });
  }
};

export const fetchSearchResults = (showTrending = true) => {
  return async dispatch => {
    const fetchAndHandleData = async () => {
      const res = await fetch(
        showTrending
          ? "https://api.coingecko.com/api/v3/search/trending"
          : "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
      );

      if (!res.ok) {
        throw new Error("Unable to fetch search results!");
      }

      const data = await res.json();
      console.log(data);

      const coinsArray = [];

      showTrending
        ? transformDataAndPush(data.coins, coinsArray, true)
        : transformDataAndPush(data, coinsArray, false);

      console.log(coinsArray);
      return coinsArray;
    };

    try {
      const transformedArr = await fetchAndHandleData();
      dispatch(
        searchActions.setTrendingSearchResults({
          coinSearchArray: transformedArr,
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  };
};
