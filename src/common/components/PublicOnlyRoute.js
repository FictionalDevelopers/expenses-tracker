import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import {connect} from "react-redux";

const propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    redirectTo: PropTypes.string,
};

const defaultProps = {
    redirectTo: '/',
};

const PublicOnlyRoute = props => {
    const {isLoggedIn, redirectTo} = props;
    if (isLoggedIn) {
        return <Redirect to={redirectTo} />;
    }

    return <Route {...props} />;
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});

PublicOnlyRoute.propTypes = propTypes;
PublicOnlyRoute.defaultProps = defaultProps;

export default connect(mapStateToProps)(PublicOnlyRoute);
