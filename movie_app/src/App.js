import React, {Component} from 'react';
import './App.css';
import Movie_Info from './Components/movies';
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
//import Linker from './Components/Linker';
//import Rated from './Components/Rated';
//import StarRatings from 'react-star-ratings';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: Movie_Info
    };
  }
  
  render() {
    let movies = null;
    movies = this.state.data.map(movie => 
      ( 
        <div  className = "moviecard">
          <Router>
            <div>
              <Link to = {`/${movie.movie_id}`}  key = {movie.movie_id}> <img src = {movie.image} width='240px' height='356px' style={{borderRadius:'15px'}}/><br />
              <div className = "title">{movie.title}<br/>
               Rating : {movie.avg_rating}    {/*<Rated rate={`${movie.avg_rating}`} />*/} 
               {/*<StarRatings
                rating={this.props.avg_rating}
                starRatedColor="blue"
                numberOfStars={5}
                name='rating' starDimension='20px'/>*/}
               </div>
               </Link><br/>
            </div>
          </Router>
        </div>

       )
      );
return(
  <div className = "App">
    <div className = "page">
      {movies}
    </div>
  </div>
)
  }
}
export default App;