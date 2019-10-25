import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Join} />
        <Route path = "/chat" component = {Chat} />
      </Switch>
    </Router>
  )
  
}

export default App;
