import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
 
class Rating extends Component {

    constructor() {
        super();
     
        this.state = {
          rating: 0
        };
      }

    changeRating( newRating) {
      this.setState({
        rating: newRating
      });
    }
 
    render() {
      return (
        <StarRatings
          rating={this.state.rating}
          starRatedColor="yellow"
          changeRating={this.changeRating.bind(this)}
          numberOfStars={5}
          name='rating'
          starDimension="40px"
        starSpacing="9px"
        />
      );
    }
}
export default Rating