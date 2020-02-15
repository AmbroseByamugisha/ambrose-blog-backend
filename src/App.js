import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import PostDetails from './components/PostDetails' 
import EditPost from './components/EditPost'

function App() {
  return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/post/:id' component={PostDetails} />
          <Route path='/update_post' component={EditPost} />
        </Switch>
      </div>
  )
}

export default App