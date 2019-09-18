import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const defaultProps = {
    redirectTo: '/login',
};

const PrivateRoute = ({redirectTo, ...rest}) => {
    const isAUth = true;
    if (isAUth) {
        return <Redirect to={redirectTo} />;
    }
};

PrivateRoute.defaultProps = defaultProps;

export default PrivateRoute;
