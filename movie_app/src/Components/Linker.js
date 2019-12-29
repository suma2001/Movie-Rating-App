import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import App from 'C:/Users/suma shreya t v/movie_app/src/App';
import  'C:/Users/suma shreya t v/movie_app/src/App.css';
import Description from './Description';
import Add_movie from './Add_movie';
import logo from './clapper.png';
import List_movie from './List_movie';

function Linker() {
    return(
        <Router>
    <div className="glow">{" "}MOVIE RATING
      <span className="list">
          <Link to ="list_movie"> <i className="fas fa-list" style={{fontSize:'48px', color:'white'}}/></Link>
      </span>
      <span className="film">
          <Link to ="add_movie"> <i className="fas fa-film" style={{fontSize:'48px', color:'white'}}/></Link>
      </span>
      <span className="home">
          <Link to =""><i className="fas fa-home" style={{fontSize:'48px', color:'white'}}/></Link>
      </span>
    </div>
        <Switch>
        <Route exact path="/" component={App} />
    <Route path="/home" component={App} />
    <Route path="/add_movie" component={Add_movie} />
    <Route path="/list_movie" component={List_movie} />
    <Route path="/:id" component={Description}  />
        </Switch>
    </Router>
    );
}
export default Linker;