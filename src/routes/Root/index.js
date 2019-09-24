import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import {logout} from '../../state/auth/actions'

const propTypes = {
    logout: PropTypes.func.isRequired,
};

const Root = props => {
    const handleLogout = () => {
        const {logout} = props;
        logout();
    };

    return (
        <div>
            <h1>Rout route</h1>
            <Button variant="contained" color="primary" onClick={handleLogout}>logout</Button>
        </div>
    );
};

const mapDispatchToProps = {
    logout
};

Root.propTypes = propTypes;

export default connect(
    null,
    mapDispatchToProps
)(Root);
