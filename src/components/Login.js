import React, { Component } from 'react'
import { signIn } from '../actions'
import { connect } from 'react-redux'
import '../index.css'

class Login extends Component {
    state = { email: "", password: ""}
    
    handleEmailChange = ({ target }) => {
        this.setState({ email: target.value })
    }

    handlePasswordChange = ({ target }) => {
        this.setState({ password: target.value })
    }

    // post title input and truncate the body
    // add warning and info msgs after action
    handleSubmit = (event) => {

        const { dispatch } = this.props
        //const { body, title } = this.state
        
        dispatch(signIn(this.state))
        console.log(this.state)
        this.props.history.push('/')
        event.preventDefault()
        }
        render() {
            const { loginError, loading } = this.props;
            return(
                <div className="login-form">
                <form className="form-login">
                <h3>Login here</h3>
                <input onChange={this.handleEmailChange} placeholder="Enter your email"  name="title" />
                <input onChange={this.handlePasswordChange} placeholder="Enter your password"  name="body" type="password" />
                {loginError && (
                <p>
                    Incorrect email or password.
                </p>
                )}
                {loading && (
                <p>
                    Loggin In...
                </p>
                )}
                <button onClick={this.handleSubmit}>Submit</button>
                </form>
                </div>
            )
        }
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        loginError: state.auth.error
    }
}

export default connect(mapStateToProps)(Login)