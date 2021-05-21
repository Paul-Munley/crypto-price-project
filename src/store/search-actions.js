import { searchActions } from "./search-slice";

const transformDataAndPush = (data, coinsArray /* , showTrending */) => {
  // Will show trending results onClick into search bar
  // if (showTrending) {
  //   data.forEach(coin =>
  //     coinsArray.push({
  //       id: coin.item.id,
  //       thumbnail: coin.item.thumb,
  //       name: coin.item.name,
  //       symbol: coin.item.symbol,
  //       rank: coin.item.market_cap_rank,
  //     })
  //   );
  // }

  // Will not show trending results if typing in search bar to dynamically show search results
  // if (!showTrending) {
  // const shortsAndLongs = new RegExp(/\d.{0,3}[X]/);
  // const aaveCoins = new RegExp(/(Aave) .{1,}/);

  // data
  //   .filter(
  //     coin => !shortsAndLongs.test(coin.name) && !aaveCoins.test(coin.name)
  //   )
  //   .forEach(coin => {
  //     coinsArray.push({
  //       id: coin.id,
  //       name: coin.name,
  //       symbol: coin.symbol,
  //     });
  //   });

  const dataEntries = Object.entries(data);
  console.log(dataEntries);

  // const newEntries = dataEntries.filter(entry => entry[1].IsTrading === true);
  // console.log(newEntries);

  dataEntries
    .filter(entry => entry[1].IsTrading === true)
    .forEach(entry => {
      coinsArray.push({
        id: entry[1].Id,
        thumbnail: `https://www.cryptocompare.com/${entry[1].ImageUrl}`,
        name: entry[1].CoinName,
        symbol: entry[1].Symbol,
      });
    });
  // }
};

export const fetchSearchResults = (/* showTrending = true */) => {
  return async dispatch => {
    const fetchAndHandleData = async () => {
      // const res = await fetch(
      //   showTrending
      //     ? "https://api.coingecko.com/api/v3/search/trending"
      //     : "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
      // );

      const res = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist?530d7cc00ed72b234a8773ce5300315f48a4308d547f786e9d630c8ce17ad859"
      );

      if (!res.ok) {
        throw new Error("Unable to fetch search results!");
      }

      const data = await res.json();
      console.log(data);

      const coinsArray = [];

      // showTrending
      //   ? transformDataAndPush(data.coins, coinsArray, true)
      //   : transformDataAndPush(data, coinsArray, false);
      transformDataAndPush(data.Data, coinsArray);

      console.log("Fetch Initiated");
      return {
        coinsArray,
        // showTrending,
      };
    };

    try {
      const { coinsArray } = await fetchAndHandleData();
      // if (showTrending === true) {
      dispatch(
        searchActions.setSearchResults({
          coinSearchArray: coinsArray,
        })
      );
      // } else {
      //   dispatch(
      //     searchActions.setSearchResults({
      //       coinSearchArray: coinsArray,
      //     })
      //   );
      // }
    } catch (err) {
      console.error(err.message);
    }
  };
};

// export const dynamicSearchFilter = (coinSearchArray, searchQuery) => {
//   return dispatch => {
//     const filteredArray = coinSearchArray.filter(coin =>
//       coin.name.includes(searchQuery)
//     );
//   };
// };
