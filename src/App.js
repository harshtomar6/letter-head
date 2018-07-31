import React, { Component } from 'react';
import { Router, Switch, Route, } from 'react-router-dom';
import configureHistory from './configureHistory';
import Quotation from './components/quotation/quotation';
import Preview from './components/quotation/preview';
import Homepage from './components/homepage/homepage';
import View from './components/quotation/view';

class App extends Component {
  
  componentDidMount(){
  }

  render() {
    const history = configureHistory();
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/preview" render={props => <Preview {...props}/>} />
          <Route exact path="/quotation" component={View} />
          <Route exact path="/quotation/new" component={Quotation} />
        </Switch>
      </Router>
    );
  }
}

export default App;
