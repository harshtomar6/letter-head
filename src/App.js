import React, { Component } from 'react';
import { Router, Switch, Route, } from 'react-router-dom';
import configureHistory from './configureHistory';
import Quotation from './components/quotation/quotation';
import Preview from './components/quotation/preview';

class App extends Component {
  
  componentDidMount(){
  }

  render() {
    const history = configureHistory();
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Quotation} />
          <Route path="/preview" render={props => <Preview {...props}/>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
