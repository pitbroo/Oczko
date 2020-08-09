import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Card from './Cards';
import Cards from './Cards';

class PlayerOne extends Component{

    
    render(){
        return(
           <div>
               <Cards />
           </div>
        )
    }
}
export default PlayerOne