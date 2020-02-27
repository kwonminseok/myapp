import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import {Landing, Trade, BTCUSD,ETHUSD} from '../Screens'
import './App.css';

class App extends Component {

  render() { 

    return (
      <div>
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route path='/trade/ETHUSD' component={ETHUSD} />
          <Route path='/trade/BTCUSD' component={BTCUSD} />
        </Switch>
      </div>
    )
  }
}

export default App;
