import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { APIStringTransformer } from "../helpers/api-string-transformer";
import CoinInfo from "../components/coin/CoinInfo";

const CoinDetailPage = () => {
  const params = useParams();
  const clickedCoin = params.coinId.toLowerCase().replace(" ", "");
  const convertedCoin = APIStringTransformer(clickedCoin);

  console.log(clickedCoin);

  const [coinData, setCoinData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(coinData);

  useEffect(() => {
    const fetchCoinData = async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${convertedCoin}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=true&sparkline=true
        `
      );

      console.log(res);

      // 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=MAID&tsyms=USD,EUR'

      const data = await res.json();

      console.log(data);
      // console.log(USD);

      setCoinData(data);
      setIsLoading(false);
    };
    fetchCoinData();
  }, [params]);

  return (
    !isLoading && (
      <CoinInfo
        name={coinData.name}
        symbol={coinData.symbol}
        img={coinData.image.large}
        rank={coinData.market_cap_rank}
        currentPriceUSD={coinData.market_data.current_price.usd}
        percentageChangeUSD={coinData.market_data.price_change_percentage_24h}
        currentPriceBTC={coinData.market_data.current_price.btc}
        percentageChangeBTC={
          coinData.market_data.price_change_percentage_24h_in_currency.btc
        }
        currentPriceETH={coinData.market_data.current_price.eth}
        percentageChangeETH={
          coinData.market_data.price_change_percentage_24h_in_currency.eth
        }
      />
    )
  );
};

export default CoinDetailPage;
