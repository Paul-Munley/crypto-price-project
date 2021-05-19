// import { useDispatch } from "react-redux";
// import { searchActions } from "../store/search-slice";

// const dynamicSearchHelpers = {
//   transformTrendingResults: coinsList => {
//     const dispatch = useDispatch();

//     const coinsArray = [];

//     coinsList.forEach(coin => {
//       coinsArray.push({
//         id: coin.item.id,
//         thumbnail: coin.item.thumb,
//         name: coin.item.name,
//         symbol: coin.item.symbol,
//         rank: coin.item.market_cap_rank,
//       });
//     });
//     dispatch(searchActions.setCoinSearchArray(coinsArray));
//   },
//   transformDynamicResults: () => {},
// };

// export default dynamicSearchHelpers;
