import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Portfolio, Projects } from './components/_index';

class App extends Component {
  
  render() {

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Portfolio} />
          <Route path='/projects/:type' component={Projects}/>
        </Switch>   
      </Router>
    );
  }
}

export default App;