import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish){
    return(
    <div className="col-12 col-md-5 m-1">
    <Card>
      <CardImg
        top
        src={this.props.dish.image}
        alt={this.props.dish.name}
      />
      <CardBody>
        <CardTitle>{this.props.dish.name}</CardTitle>
        <CardText>{this.props.dish.description}</CardText>
      </CardBody>
    </Card>
  </div>

    )

  }
  render() {

    const commentsForSelectedDish=this.props.dish.comments.map((selectedDish)=>{

        return(
        <div className="col-12 col-md-5 m-1">

    <Card key={selectedDish.id}>
    <CardBody>
    <CardTitle>{selectedDish.comment}</CardTitle>
    <CardText>{selectedDish.author} {selectedDish.date}</CardText>
    </CardBody>
    </Card>
        </div>
   )
    })



    if (this.props.dish != null) {
      return (
        <div className="contaier">
          <div className="row">
            {this.renderDish(this.props.dish)}
            <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
           {commentsForSelectedDish}
          </div>
          </div>
         
           
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
