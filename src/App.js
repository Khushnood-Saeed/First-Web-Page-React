import logo from './logo.svg';
import React,{Component} from 'react'
import './App.css';
import Menu from './components/MenuComponents';
import { Dishes } from './shared/dishes';
class App extends Component {

constructor(props){
  super(props);
  this.state={
    dishes:Dishes
  }
}
render(){
  return (
    <div>
   <Menu dishes={this.state.dishes}/>
    </div>
  );
}
}

export default App;
