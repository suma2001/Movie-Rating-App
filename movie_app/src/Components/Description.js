import React, { Component } from 'react';
import './Linker';
import Movies from './movies';
import './Description.css';
//import 'antd/dist/antd.css';
import users from './user';
import Rating from './Rating';

class Description extends Component {

    constructor(props,{match}) {
        super(props,{match});
        this.state = {
             id: props.match.params.id,
        }
    }

    handleChange = value => {
        this.setState({ 
          value:{value}, });
      };
    
    
      /*handleSubmit=()=>{
          var obj= {Movies:Movies[this.state.ID].title, rating:this.state.value}
          console.log( JSON.stringify(obj));
      }
*/
    render() {
        const p = Movies[this.state.id].director_id;
        return(
            console.log(`${users[p]}`),
            <div className="full_page">
                <h1 className="title">{Movies[this.state.id].title}</h1>

            <div className="content">
            {Movies[this.state.id].description}
                <br/>
            <h4 className="date">Release Date: {Movies[this.state.id].release_date}<br/>
            Director: {users[p].name}</h4>
            <h4 className="stars">Rate this Movie: <Rating/></h4>
            <br/>
            <button className="but" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
    
}
export default Description;