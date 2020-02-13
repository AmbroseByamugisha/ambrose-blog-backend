import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import PostDetails from './components/PostDetails' 

function App() {
  return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/post/:id' component={PostDetails} />
        </Switch>
      </div>
  )
}

export default App