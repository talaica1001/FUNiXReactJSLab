import React, { Component } from "react";
import { Card, CardImg, CardImgOverLay, CardTitle, CardBody, CardText  } from "reactstrap";

class DishDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedDishDetail: this.props.DishDetail
        };
    }

    renderDish(dish){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </card>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if(comments != null) {
            const cmts = comments.map(comment => {
                return(
                    <li key = {comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author}, &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}</p>
                    </li>
                )
            })
            return(
                <div className="col-12 col-md-5 mt-1">
                    <h4>Comments</h4>
                    <ul className="un-styled">
                        {cmts}
                    </ul>
                </div>
            )
        }
        else {
            return(<div></div>)
        }
    }


    render() {
        const dish = this.props.dish;
        if (dish != null){

        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
        }
        else {
            return(<div></div>)
        }
    }
}

export default DishDetail;