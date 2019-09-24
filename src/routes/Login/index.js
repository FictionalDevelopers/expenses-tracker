import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {login} from '../../state/auth/actions';

const propTypes = {
    login: PropTypes.func.isRequired,
};

const Login = props => {
    const handleLogin = () => {
        const {login} = props;
        login()
    };

    return (
        <div>
            <h1>Login route</h1>
            <Button variant="contained" color="primary" onClick={handleLogin}>login</Button>
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
