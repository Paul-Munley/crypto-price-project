import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchActions } from "./store/search-slice";
import "./App.css";
import Layout from "./layout/Layout";
import MainHeader from "./components/MainHeader";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";

function App() {
  // const dispatch = useDispatch();

  // const clickOutsideSearchHandler = e => {
  //   const approvedClickAreas =
  //     e.target.className === "input" ||
  //     e.target.closest("div").className.includes("SearchList_box");
  //   // console.log(e.target.closest("div").className.includes("SearchList_box"));
  //   console.log(e.target);
  //   if (approvedClickAreas) return;
  //   dispatch(searchActions.turnOffSearchBar());
  // };

  return (
    <Layout /* onClick={clickOutsideSearchHandler} */>
      <MainHeader />
      <main>
        <Switch>
          <Route exact path="/">
            <SearchPage /* onClick={clickHandler} */ />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
