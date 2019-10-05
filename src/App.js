import React ,{Component} from 'react';
import './App.css';
import LayOut from './hoc/Layout/Layout'
import BuildBurger from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'

class App extends Component{
  render(){
    return (
      <div>
        <LayOut>
         <BuildBurger/>
         <Checkout/>
        </LayOut>
      </div>
    );
  }
  
}

export default App;
