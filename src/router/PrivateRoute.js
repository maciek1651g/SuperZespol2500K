import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ClientAPI from "../clientAPI/ClientAPI";

const PrivateRoute = ({component: Component, ...rest}) => {
    const api = new ClientAPI();

    return (
        <Route {...rest} render={props => (
            api.checkIfLoggedIn() ?
                <Component {...props} />
                : <Redirect to="/login/" />
        )} />
    );
};

export default PrivateRoute;