/*import React, { Component } from 'react'
import './Add_movie.css';
import user from './user';
import 'antd/dist/antd.css';
import { Select, message } from 'antd';

const { Option } = Select;

const actors = [];
for (let i = 7; i < 25; i++) {
  actors.push(<Option key={user[i].name} style={{color:'black' , fontSize:'20px'}}>{user[i].name}</Option>);
}
const directors=[];
for (let i = 0; i < 7; i++) {
  directors.push(<Option key={user[i].name} style={{color:'black' , fontSize:'20px'}}>{user[i].name}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Add_movie extends Component {

    constructor() {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        
        this.setState({ 
            res: stringifyFormData(data),
        });
        
      }
    render() {
        return (
            <div className="page">
                <h1 style={{color:'white', textAlign:'center',paddingTop:'20px'}}>Fill this form to add a movie</h1>
                <div>
                <form onSubmit={this.handleSubmit}>
        
        <div className="header">
        <label className="head">Title of the movie:</label><br/>
        <input id="Title" name="Title" type="text" />
        </div>

        <div className="header">
        <label className="head">Date Of Release:</label><br/>
        <input id="date" name="date" type="text" />
        </div>

        <div className="header">
        <label className="head">Average  Rating:</label><br/>
        <input id="avg_rating" name="avg_rating" type="text" />
        </div>
        
        <div className="header">
        <label className="head">About the Movie:</label><br/>
        <input id="description" name="description" type="text" />
        </div>

        <div className="header">
        <label className="head">Link of the poster:</label><br/>
        <input id="poster" name="poster" type="text" />
        </div>

        
        <button className="button">Submit</button><br/><br/>  
      </form>
    </div>
    <Select
    mode="multiple"
    style={{ width: '150%' ,fontSize:'20px'}}
    placeholder="Please select the directors"
    onChange={handleChange}
   
  >{directors}
  </Select>
  <br/> <br/>
            <Select
                mode="multiple"
                style={{width: '100%'}}
                placeholder="Please select"
                onChange={handleChange}
            > {actors} </Select>
            </div>
        )
    }
}

function stringifyFormData(fd) {
    const data = {};
      for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
  }
    
    function handleMenuClick(e) {
      message.info('Click on menu item.');
      console.log('click', e);
    }

export default Add_movie
*/
import React, { Component } from 'react';
import './Add_movie.css';
import 'antd/dist/antd.css';
//import 'C:/Users/suma shreya t v/movie_app/src/index.css';
import user from './user';
import { Select, message } from 'antd';
import Date from './Date';
const { Option } = Select;

const actors = [];
for (let i = 7; i < 25; i++) {
  actors.push(<Option key={user[i].name} style={{color:'black' , fontSize:'20px'}}>{user[i].name}</Option>);
}
const directors=[];
for (let i = 0; i < 7; i++) {
  directors.push(<Option key={user[i].name} style={{color:'black' , fontSize:'20px'}}>{user[i].name}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Add_movie extends Component{
    constructor() {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        
        this.setState({ 
            res: stringifyFormData(data),
        });
        
      }
    
      render() {
        
        return (
            <div className="form">
            <div className="page">
            <h1 style={{color:'white', textAlign:'center',paddingTop:'20px'}}>Fill this form to add a movie</h1>

            <form onSubmit={this.handleSubmit}>
        
            <div className="header">
        <label className="head">Title of the movie:</label><br/>
        <input id="Title" name="Title" type="text" />
        </div>

        <div className="header" className="search">
        <label className="head">Date Of Release:</label><br/>
        <span className="fa fa-calendar-alt"></span>
        <input id="date" name="date" type="text" />
        </div>

        <div className="header" className="search">
        <label className="head">Average  Rating:</label><br/>
        <span className="fa fa-star"></span>
        <input id="avg_rating" name="avg_rating" type="text" />
        </div>
        
        <div className="header">
        <label className="head">About the Movie:</label><br/>
        <input id="description" name="description" type="text" />
        </div>

        <div className="header">
        <label className="head">Link of the poster:</label><br/>
        <input id="poster" name="poster" type="text" />
        </div>  
            </form>
            </div>

          <br/>
          <div className="header" className="search">
          <label className="head">Directors:</label><br/>
          
          <Select
    mode="multiple"
    style={{ height: '0%', width: '60%' , fontSize:'20px', color: 'black'}}
    placeholder="Please select the directors"
    onChange={handleChange}
   >{directors}
  </Select>
          </div>
  <br/>
  <div className="header">
  <label className="head">Actors:</label><br/>
  <Select
    mode="multiple"
    style={{ height: '30px', width: '60%' ,fontSize:'20px', color: 'black'}}
    placeholder="Please select the actors"
    onChange={handleChange}
  >{actors}
  </Select>
  </div>

          
  <br/><br/>
  <button className="button">Submit</button><br/><br/>
             
            </div>
            
        );
      }
    }

    
    
    function stringifyFormData(formdata) {
      const data = {};
        for (let key of formdata.keys()) {
          data[key] = formdata.get(key);
      }
      return JSON.stringify(data, null, 2);
    }
    
export default Add_movie;
