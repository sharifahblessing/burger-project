import React ,{Component} from 'react';
import './App.css';
import LayOut from './components/Layout/Layout'
import BuildBurger from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component{
  render(){
    return (
      <div>
        <LayOut>
         <BuildBurger/>
        </LayOut>
      </div>
    );
  }
  
}

export default App;
