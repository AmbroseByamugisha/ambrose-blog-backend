import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../actions'
import { NavLink } from 'react-router-dom'
import '../index.css'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li onClick={props.signOut} className="pointer">Log Out</li>
        <li><NavLink to='/signup'>Create user</NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)