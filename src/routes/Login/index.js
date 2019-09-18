import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../../state/auth/actions'

class Login extends Component {

    render() {
        return (
            <div>
                Login route
                <button onClick={this.props.login}>login</button>
            </div>
        );
    }
};

const mapDispatchToProps = {
    login
}

export default connect(
    null,
    mapDispatchToProps
)(Login);
