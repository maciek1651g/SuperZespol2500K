import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ClientAPI from "../clientAPI/ClientAPI";

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const api = new ClientAPI();

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            api.checkIfLoggedIn() && restricted ?
                <Redirect to="/" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;