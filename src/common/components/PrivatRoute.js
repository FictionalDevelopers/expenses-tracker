import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import {connect} from 'react-redux'

const propTypes = {
    component: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    redirectTo: PropTypes.string,
};

const defaultProps = {
    redirectTo: '/login',
};

const PrivateRoute = props => {
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

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
})

PrivateRoute.propTypes = propTypes;
PrivateRoute.defaultProps = defaultProps;

export default connect(mapStateToProps)(PrivateRoute);
