import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import PostDetails from './components/PostDetails' 
import EditPost from './components/EditPost'
import SignUp from './components/SignUp'

function App() {
  return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/post/:id' component={PostDetails} />
          <Route path='/update_post' component={EditPost} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
  )
}

export default App