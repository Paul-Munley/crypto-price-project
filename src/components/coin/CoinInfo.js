import { useParams } from "react-router";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./CoinInfo.module.css";

const CoinInfo = props => {
  const params = useParams();
  const clickedCoin = params.coinId;
  console.log(clickedCoin);

  return (
    <div className={classes.container}>
      <div>
        <h3>{props.coinData[clickedCoin].USD.FROMSYMBOL}</h3>
      </div>
      {/* <LoadingSpinner /> */}
    </div>
  );
};

export default CoinInfo;
