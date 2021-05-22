import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CoinInfo from "../components/coin/CoinInfo";

const CoinDetailPage = () => {
  const params = useParams();
  let clickedCoin = params.coinId.toLowerCase().replace(" ", "");
  console.log(clickedCoin);
  if (clickedCoin === "usdcoin") {
    clickedCoin = clickedCoin.slice(0, 3) + "-coin";
  }
  if (clickedCoin === "xrp") {
    clickedCoin = "ripple";
  }
  const [coinData, setCoinData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(coinData);

  useEffect(() => {
    const fetchCoinData = async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${clickedCoin}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=true&sparkline=true
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

  return !isLoading && <CoinInfo name={coinData.name} />;
};

export default CoinDetailPage;
