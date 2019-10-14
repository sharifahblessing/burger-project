import React, { Component } from 'react';
import './App.css';
import LayOut from './hoc/Layout/Layout'
import BuildBurger from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/orders/orders'

import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <LayOut>
          <Switch>
            <Route path='/Checkout' component={Checkout} />
            <Route path='/Orders' component={Orders} />
            <Route path='/' exact component={BuildBurger} />
          </Switch>
        </LayOut>
      </div>
    );
  }

}

export default App;
