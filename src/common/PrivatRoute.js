import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {connect} from 'react-redux'

const defaultProps = {
    redirectTo: '/login',
};

const PrivateRoute = props => {
    console.log('props', props)
    const {isLoggedIn, redirectTo, component: Component} = props;
    if (!isLoggedIn) {
        return <Redirect to={redirectTo} />;
    }

    return (
        <Route
            {...props}
            render={() => (
                <Component {...props} />
            )}
        />
    );
};

const mapStateToProps = state => {
    console.log('state', state)
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

PrivateRoute.defaultProps = defaultProps;

export default connect(mapStateToProps)(PrivateRoute);
