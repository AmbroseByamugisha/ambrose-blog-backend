import React, { Component } from 'react'
import { signUp } from '../actions'
import { connect } from 'react-redux'
import '../index.css'

class SignUp extends Component {
    state = { firstName: "", lastName: "", email: "", password: ""}
    
    handleFirstNameChange = ({ target }) => {
        this.setState({ firstName: target.value })
    }

    handleLastNameChange = ({ target }) => {
        this.setState({ lastName: target.value })
    }

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
        
        dispatch(signUp(this.state))
        console.log(this.state)
        event.preventDefault()
        }
        render() {
            const { signupError, loading } = this.props;
            return(
                <div className="login-form">
                <form className="form-login">
                <input onChange={this.handleFirstNameChange} placeholder="Enter your first name"  name="firstName" className="validate" required />
                <input onChange={this.handleLastNameChange} placeholder="Enter your last name"  name="lastName" className="validate" required />
                <input onChange={this.handleEmailChange} placeholder="Enter your email"  name="title" className="validate" required />
                <input onChange={this.handlePasswordChange} placeholder="Enter your password"  name="body" type="password" className="validate" required />
                {signupError && (
                <p>
                    Incorrect email or password.
                </p>
                )}
                {loading && (
                <p>
                    Loading...
                </p>
                )}
                <button onClick={this.handleSubmit} className="waves-effect waves-light btn">Signup</button>
                </form>
                </div>
            )
        }
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        signupError: state.auth.error
    }
}

export default connect(mapStateToProps)(SignUp)