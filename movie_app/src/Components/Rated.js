import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
 
function Rated(props){
    return (
        console.log(`${props.rate}`),
    <StarRatings
    rating= {props.rate}
    starRatedColor="yellow"
    //changeRating={this.changeRating.bind(this)}
    numberOfStars={5}
    name='rating'
    starDimension="20px"
  starSpacing="9px"
  />
  /*<h1>{props.rate}</h1>*/
  );
    }
export default Rated