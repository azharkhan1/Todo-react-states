import React from 'react';
import {
    Link
  } from "react-router-dom";

class About extends React.Component {

Home = () =>{
    this.props.history.push('/')
    }

    render() {
        return (
            <div>

         
            <h1>
               About Page
            </h1>
            {/* <Link to="/">Go To Home</Link> */}
            <button onClick={this.Home}>Go To Home</button>
            </div>
        )
    }
}

export default About;