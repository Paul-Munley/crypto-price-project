import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CoinInfo from "../components/coin/CoinInfo";

const CoinDetailPage = () => {
  const params = useParams();
  const [coinData, setCoinData] = useState();

  useEffect(() => {
    const fetchCoinData = async () => {
      const res = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${params.coinId}&tsyms=USD&api_key={530d7cc00ed72b234a8773ce5300315f48a4308d547f786e9d630c8ce17ad859}`
      );

      // 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=MAID&tsyms=USD,EUR'

      const data = await res.json();

      console.log(data);
      setCoinData(data);
    };
    fetchCoinData();
  }, [params]);

  return <CoinInfo coinData={coinData} />;
};

export default CoinDetailPage;
