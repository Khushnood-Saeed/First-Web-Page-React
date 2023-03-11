import React,{Component} from 'react'
import Menu from './MenuComponents';
import { Dishes } from '../shared/dishes';
import DishDetail from './DishDetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {Switch, Route, Redirect } from 'react-router-dom'
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Comments } from '../shared/comment';
import { Promotions } from '../shared/promotion';
import { Leaders } from '../shared/leaders';

class Main extends Component {

constructor(props){
  super(props);
  this.state={
    dishes:Dishes,
    comments:Comments,
    promotions:Promotions,
    leaders:Leaders,
    selectedDishId:null
  }
}

onDishSelect=(dishId)=>{
    this.setState({selectedDishId:dishId});
}



render(){



  const HomePage = () => {
    return(
        <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
    );
  }

const AboutPage=()=>{
  return(
    <About/>
  )
}
const ContactPage=()=>{

  return(
   <Contact/>
)

}
const DishWithId = ({match}) => {
  return(
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
  );
};

  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/home' component={HomePage}/>
        <Route path='/about' component={AboutPage} />
        <Route exact path='/menu' component={()=><Menu  dishes={this.state.dishes} /> }/>
        <Route exact path='/contactus' component={ContactPage}/> 
        <Route path='/menu/:dishId' component={DishWithId} />
<Redirect to='/home'/>
   </Switch>
   <Footer/>
    </div>
  );
}
}


export default Main;
