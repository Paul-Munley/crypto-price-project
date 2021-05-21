import { Fragment } from "react";
import { Route } from "react-router-dom";
import Search from "../components/search/Search";
import CoinDetailPage from "./CoinDetailPage";

const SearchPage = () => {
  return (
    <Fragment>
      <Search />
      <Route path={"/:quoteId"}>
        <CoinDetailPage />
      </Route>
    </Fragment>
  );
};

export default SearchPage;
