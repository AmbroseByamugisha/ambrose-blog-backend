import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import PostDetails from './components/PostDetails' 
import EditPost from './components/EditPost'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'

function App(props) {
  const { authUID } = props
  return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/post/:id' component={PostDetails} />
          {/* <Route path='/update_post' component={EditPost} /> */}
          {/* <Route path='/signup' component={SignUp} /> */}
          <ProtectedRoute
            exact
            path="/signup"
            component={SignUp}
            authUID={authUID}
          />
          <Route path='/login' component={Login} />
          <ProtectedRoute
            exact
            path="/update_post"
            component={EditPost}
            authUID={authUID}
          />
        </Switch>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authUID: state.firebase.auth.uid
  }
}

export default connect(mapStateToProps)(App)