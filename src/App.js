import { Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import LoginPage from "./LoginPage/LoginPage.js";
import MainPage from "./MainPage/MainPage.js";
import NoMatch from "./router/NoMatch";
import PrivateRoute from "./router/PrivateRoute";
import PublicRoute from "./router/PublicRoute";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
            <PrivateRoute exact path="/">
                <MainPage />
            </PrivateRoute>
            <PublicRoute exact path="/login/" restricted={true}>
                <LoginPage />
            </PublicRoute>
            <PrivateRoute exact path="/:id">
                <MainPage />
            </PrivateRoute>
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
