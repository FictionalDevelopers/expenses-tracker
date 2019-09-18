import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../../state/auth/actions'

class Login extends Component {
    handleClick = () => {
        console.log('ffff', this.props)
        console.log('click')
    }

    render() {
        return (
            <div>
                Login route
                <button onClick={this.props.login}>login</button>
            </div>
        );
    }
};

// const mapDispatchToProps = {
//     login,
// }

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch({type: "SIGN_IN"})
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Login);

// export default Login;
