import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
