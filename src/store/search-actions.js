import { searchActions } from "./search-slice";

const transformDataAndPush = (data, coinsArray) => {
  data.forEach(coin => {
    coinsArray.push({
      id: coin.CoinInfo.Id,
      thumbnail: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
      name: coin.CoinInfo.FullName,
      symbol: coin.CoinInfo.Name,
    });
  });
};

export const fetchSearchResults = () => {
  return async dispatch => {
    const fetchAndHandleData = async () => {
      const res = await fetch(
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key={530d7cc00ed72b234a8773ce5300315f48a4308d547f786e9d630c8ce17ad859}"
      );

      if (!res.ok) {
        throw new Error("Unable to fetch search results!");
      }

      const data = await res.json();
      console.log(data);

      const coinsArray = [];

      transformDataAndPush(data.Data, coinsArray);

      console.log("Fetch Initiated");
      return {
        coinsArray,
      };
    };

    try {
      const { coinsArray } = await fetchAndHandleData();
      dispatch(
        searchActions.setSearchResults({
          coinSearchArray: coinsArray,
        })
      );
    } catch (err) {
      console.error(err.message);
    }
  };
};
