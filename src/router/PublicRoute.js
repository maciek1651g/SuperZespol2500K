import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ClientAPI from "../clientAPI/ClientAPI";

const PublicRoute = ({children, restricted, ...rest}) => {
    const api = new ClientAPI();

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            api.checkIfLoggedIn() && restricted ?
                <Redirect to="/" />
                : children
        )} />
    );
};

export default PublicRoute;