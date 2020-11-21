import React from 'react';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import Home from './Home';
import About from './About';

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home}></Route>
                <Route path='/about' component={About}></Route>
            </Router>
        )
    }
}


export default AppRouter;