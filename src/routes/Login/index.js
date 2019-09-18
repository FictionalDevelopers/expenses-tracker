import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../state/auth/actions';

const propTypes = {
    // history: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
};

const Login = props => {
    const handleLogin = () => {
        const {login, history} = props;
        login()
        // history.push('/')
    };

    return (
        <div>
            Login route
            <button onClick={handleLogin}>login</button>
        </div>
    );
};

const mapDispatchToProps = {
    login
};

Login.propTypes = propTypes;

export default connect(
    null,
    mapDispatchToProps
)(Login);
