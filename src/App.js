import { Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import LoginPage from "./LoginPage/LoginPage.js";
import MainPage from "./MainPage/MainPage.js";
import ClientAPI from "./clientAPI/ClientAPI";
import NoMatch from "./router/NoMatch";

const App = () => {
    const clientAPI = new ClientAPI();
    const isLoggedIn = clientAPI.checkIfLoggedIn();

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
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
      </Router>
    </Fragment>
  );

    // return (
    //     <Fragment>
    //         <Router>
    //             <Switch>
    //                 <PrivateRoute component={MainPage} path="/" exact/>
    //                 <PublicRoute restricted={true} component={LoginPage} path="/login/" exact/>
    //             </Switch>
    //         </Router>
    //     </Fragment>
    // );
}

export default App;
