import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish(dish) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    /*const commentsForSelectedDish=this.props.dish.comments.map((selectedDish)=>{

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
    })*/

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{this.props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
          {/*<div className="col-12 col-md-5 m-1">
              <RenderComments comments={this.props.comments} />
          </div>*/}
        </div>
      </div>
    );
  }
}

export default DishDetail;
