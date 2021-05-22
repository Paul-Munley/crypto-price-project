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
      <div>
        <h3>{props.name}</h3>
      </div>
      {/* <LoadingSpinner /> */}
    </div>
  );
};

export default CoinInfo;
