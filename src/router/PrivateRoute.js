import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ClientAPI from "../clientAPI/ClientAPI";

const PrivateRoute = ({children, ...rest}) => {
    const api = new ClientAPI();

    return (
        <Route {...rest} render={props => (
            api.checkIfLoggedIn() ?
                children
                : <Redirect to="/login/" />
        )} />
    );
};

export default PrivateRoute;