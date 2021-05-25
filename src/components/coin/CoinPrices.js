import classes from "./CoinPrices.module.css";
import priceIcon from "../../assets/dollar-symbol-svgrepo-com.svg";
import downArrow from "../../assets/down-arrow-hand-drawn-outline-svgrepo-com.svg";
import upArrow from "../../assets/up-arrow-hand-drawn-outline-svgrepo-com.svg";
import altUpArrow from "../../assets/alt-up-arrow-svgrepo-com.svg";
import altDownArrow from "../../assets/alt-down-arrow-svgrepo-com.svg";

const CoinPrices = props => {
  const lessThanWholeNum = props.currentPriceUSD < 1;
  const lessThanWholeNumETH = props.currentPriceETH < 1;

  const positivePercentUSD = props.percentageChangeUSD > 0;
  const negativePercentUSD = props.percentageChangeUSD < 0;
  const neutralPercentUSD = props.percentageChangeUSD === 0;

  const positivePercentBTC = props.percentageChangeBTC > 0;
  const negativePercentBTC = props.percentageChangeBTC < 0;
  const neutralPercentBTC = props.percentageChangeUSD === 0;

  const positivePercentETH = props.percentageChangeETH > 0;
  const negativePercentETH = props.percentageChangeETH < 0;
  const neutralPercentETH = props.percentageChangeUSD === 0;

  return (
    <div className={classes.currentPrices}>
      <div className={classes.currentPricesLabel}>
        <img src={priceIcon} height="25" width="25" />
        <p>{`${props.name} 24hr Prices`}</p>
      </div>
      <div className={classes.priceUSD}>
        <p>
          {`$${
            lessThanWholeNum
              ? props.currentPriceUSD.toLocaleString("en-US", {
                  minimumFractionDigits: 4,
                })
              : props.currentPriceUSD.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })
          }`}
        </p>
        <div
          className={`${classes.percentChangeUSD} ${
            positivePercentUSD
              ? classes.positive
              : negativePercentUSD
              ? classes.negative
              : classes.neutral
          }`}
        >
          {!neutralPercentUSD && (
            <img
              src={positivePercentUSD ? upArrow : downArrow}
              height="20"
              width="20"
            />
          )}
          <p>{`${props.percentageChangeUSD.toFixed(2)}%`}</p>
        </div>
      </div>
      <div className={classes.priceCryptos}>
        <p>{`${props.currentPriceBTC
          .toFixed(4)
          .toLocaleString("en-US", { minimumFractionDigits: 4 })} BTC`}</p>
        <div className={classes.percentChangeCryptos}>
          {!neutralPercentBTC && (
            <img
              src={positivePercentBTC ? altUpArrow : altDownArrow}
              height="15"
              width="15"
            />
          )}
          <p
            className={
              positivePercentBTC
                ? classes.positivePercent
                : negativePercentBTC
                ? classes.negativePercent
                : null
            }
          >{`${props.percentageChangeBTC.toFixed(2)}%`}</p>
        </div>
      </div>
      <div className={classes.percentChangeCryptos}>
        <p>{`$${
          lessThanWholeNumETH
            ? props.currentPriceETH
                .toFixed(4)
                .toLocaleString("en-US", { minimumFractionDigits: 4 })
            : props.currentPriceETH
                .toFixed(2)
                .toLocaleString("en-US", { minimumFractionDigits: 2 })
        }`}</p>
        <div className={classes.percentChangeCryptos}>
          {!neutralPercentETH && (
            <img
              src={positivePercentETH ? altUpArrow : altDownArrow}
              height="15"
              width="15"
            />
          )}
          <p
            className={
              positivePercentETH
                ? classes.positivePercent
                : negativePercentETH
                ? classes.negativePercent
                : null
            }
          >{`${props.percentageChangeETH.toFixed(2)}%`}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinPrices;
