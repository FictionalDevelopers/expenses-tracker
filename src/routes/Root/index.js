import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { logout } from '../../state/auth/actions';

const propTypes = {
  logout: PropTypes.func.isRequired,
};

const Root = props => {
  const { logout } = props;

  return (
    <div>
      <h1>Rout route</h1>
      <Button color="primary" onClick={logout} variant="contained">
        logout
      </Button>
    </div>
  );
};

Root.propTypes = propTypes;

export default connect(
  null,
  { logout }
)(Root);
