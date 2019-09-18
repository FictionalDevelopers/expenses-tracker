import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {logout} from '../../state/auth/actions'

const propTypes = {
    // history: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
};

const Root = props => {
    const handleLogout = () => {
        const {logout, history} = props;
        logout();
        // history.push('/login')
    }

    return (
        <div>
            Rout route
            <button onClick={handleLogout}>logout</button>
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
