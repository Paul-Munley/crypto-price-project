import { useEffect } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./CoinInfo.module.css";

const CoinInfo = props => {
  const params = useParams();
  const clickedCoin = params.coinId;
  // console.log(clickedCoin);
  // console.log(props.coinData[clickedCoin].USD.FROMSYMBOL);
  // console.log(props.coinData[clickedCoin].USD.FROMSYMBOL);

  // useEffect(() => {
  //   console.log(props.coinData[clickedCoin].USD.FROMSYMBOL);
  // }, []);

  return (
    <div className={classes.container}>
      <div className={classes.coinNameAndLogo}>
        <img height="130" width="130" src={props.img} />
        <div className={classes.nameAndRank}>
          <p>{`${props.name} (${props.symbol.toUpperCase()})`}</p>
          <div className={classes.break}></div>
          <p className={classes.rank}>{`Rank: ${props.rank}`}</p>
        </div>
      </div>
      <div>
        <p>{``}</p>
        <p>
          <b>{props.convertedLast}</b>
        </p>
      </div>
      {/* <LoadingSpinner /> */}
    </div>
  );
};

export default CoinInfo;
