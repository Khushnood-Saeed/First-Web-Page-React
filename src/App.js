import React,{Component} from 'react'
import './App.css';
import Menu from './components/MenuComponents';
import { Dishes } from './shared/dishes';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom'
class App extends Component {

constructor(props){
  super(props);
  this.state={
    dishes:Dishes
  }
}
render(){
  return (
    <BrowserRouter>
    <div>
   <Main/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
