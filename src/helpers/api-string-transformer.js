export const APIStringTransformer = clickedCoin => {
  if (clickedCoin === "usdcoin") {
    clickedCoin = clickedCoin.slice(0, 3) + "-coin";
  }
  if (clickedCoin === "xrp") {
    clickedCoin = "ripple";
  }
  if (clickedCoin.includes("uniswap")) {
    clickedCoin = "uniswap";
  }
  if (clickedCoin === "flow- dapper labs") {
    clickedCoin = clickedCoin.slice(0, 4);
  }
  if (clickedCoin === "bitcoincash") {
    clickedCoin = clickedCoin.slice(0, 7) + "-cash";
  }
  if (clickedCoin === "polygon") {
    clickedCoin = "matic-network";
  }
  if (clickedCoin === "ftxtoken") {
    clickedCoin = clickedCoin.slice(0, 3) + "-token";
  }
  if (clickedCoin === "busd") {
    clickedCoin = "binance-usd";
  }
  if (clickedCoin === "thegraph") {
    clickedCoin = clickedCoin.slice(0, 3) + "-graph";
  }
  if (clickedCoin === "ethereumclassic") {
    clickedCoin = clickedCoin.slice(0, 8) + "-classic";
  }
  if (clickedCoin === "avalanche") {
    clickedCoin = clickedCoin + "-2";
  }
  if (clickedCoin === "theta") {
    clickedCoin = clickedCoin.slice(0, 5) + "-token";
  }
  if (clickedCoin === "wrappedbitcoin") {
    clickedCoin = clickedCoin.slice(0, 7) + "-bitcoin";
  }
  if (clickedCoin === "terra") {
    clickedCoin = clickedCoin + "-luna";
  }
  if (clickedCoin === "pancakeswap") {
    clickedCoin = clickedCoin + "-token";
  }
  if (clickedCoin === "crypto.comchain token") {
    clickedCoin = "crypto-com-chain";
  }
  if (clickedCoin === "celsiusnetwork") {
    clickedCoin = "celsius-degree-token";
  }
  if (clickedCoin === "huobitoken") {
    clickedCoin = clickedCoin.slice(0, 5) + "-token";
  }
  if (clickedCoin === "compoundgovernance token") {
    clickedCoin = "compound-governance-token";
  }
  if (clickedCoin === "amp") {
    clickedCoin = clickedCoin + "-token";
  }
  if (clickedCoin === "bittorrent") {
    clickedCoin = clickedCoin + "-2";
  }
  if (clickedCoin === "anchorprotocol") {
    clickedCoin = clickedCoin.slice(0, 6) + "-protocol";
  }
  if (clickedCoin === "reserverights") {
    clickedCoin = "reserve-rights-token";
  }
  if (clickedCoin === "reserverights") {
    clickedCoin = "reserve-rights-token";
  }
  if (clickedCoin === "okex") {
    clickedCoin = "okb";
  }
  if (clickedCoin === "synthetix") {
    clickedCoin = "havven";
  }
  if (clickedCoin === "bitcoinsv") {
    clickedCoin = "bitcoin-cash-sv";
  }
  if (clickedCoin === "curvedao token") {
    clickedCoin = "curve-dao-token";
  }
  if (clickedCoin === "leotoken") {
    clickedCoin = clickedCoin.slice(0, 3) + "-token";
  }
  if (clickedCoin === "hederahashgraph") {
    clickedCoin = clickedCoin.slice(0, 6) + "-hashgraph";
  }
  if (clickedCoin === "xinfinnetwork") {
    clickedCoin = "xdce-crowd-sale";
  }
  if (clickedCoin === "creditcoin") {
    clickedCoin = clickedCoin + "-2";
  }
  if (clickedCoin === "elrond") {
    clickedCoin = "elrond-erd-2";
  }
  if (clickedCoin === "mirrorprotocol") {
    clickedCoin = clickedCoin.slice(0, 6) + "-protocol";
  }
  if (clickedCoin === "perpetualprotocol") {
    clickedCoin = clickedCoin.slice(0, 9) + "-protocol";
  }
  if (clickedCoin === "thetafuel") {
    clickedCoin = clickedCoin.slice(0, 5) + "-fuel";
  }
  if (clickedCoin === "paxosstandard") {
    clickedCoin = clickedCoin.slice(0, 5) + "-standard";
  }
  if (clickedCoin === "quant") {
    clickedCoin = "quant-network";
  }
  if (clickedCoin === "yearn.finance") {
    clickedCoin = clickedCoin.replace(".", "-");
  }
  if (clickedCoin === "skalenetwork") {
    clickedCoin = clickedCoin.slice(0, 5);
  }
  if (clickedCoin === "bitpandaecosystem token") {
    clickedCoin = "bitpanda-ecosystem-token";
  }
  if (clickedCoin === "trueusd") {
    clickedCoin = clickedCoin.slice(0, 4) + "-usd";
  }
  if (clickedCoin === "ankrnetwork") {
    clickedCoin = clickedCoin.slice(0, 4);
  }
  return clickedCoin;
};
