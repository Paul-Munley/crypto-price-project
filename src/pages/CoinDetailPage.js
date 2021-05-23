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
        convertedLast={coinData.tickers[0].converted_last.usd}
        rank={coinData.market_cap_rank}
      />
    )
  );
};

export default CoinDetailPage;
