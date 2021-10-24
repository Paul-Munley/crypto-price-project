import { useEffect } from "react";
import { useParams } from "react-router";
import classes from "./CoinInfo.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import CoinPrices from "./CoinPrices";

const CoinInfo = props => {
  const params = useParams();
  const clickedCoin = params.coinId;

  return (
    <div className={classes.container}>
      <div className={classes.coinNameAndLogo}>
        <img height="130" width="130" src={props.img} />
        <div className={classes.nameAndRank}>
          <p>{`${props.name} (${props.symbol.toUpperCase()})`}</p>
          <p className={classes.rank}>{`Rank: ${props.rank}`}</p>
        </div>
      </div>
      <CoinPrices
        name={props.name}
        symbol={props.symbol}
        currentPriceUSD={props.currentPriceUSD}
        percentageChangeUSD={props.percentageChangeUSD}
        currentPriceBTC={props.currentPriceBTC}
        percentageChangeBTC={props.percentageChangeBTC}
        currentPriceETH={props.currentPriceETH}
        percentageChangeETH={props.percentageChangeETH}
      />
    </div>
  );
};

export default CoinInfo;
