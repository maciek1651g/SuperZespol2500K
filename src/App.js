import { Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import LoginPage from "./LoginPage/LoginPage.js";
import MainPage from "./MainPage/MainPage.js";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
            <Route exact path="/">
                <MainPage />
            </Route>
            <Route path="/login/">
                <LoginPage />
            </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
