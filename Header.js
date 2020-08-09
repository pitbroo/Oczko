import React, { Component } from 'react';
import './Header.css';
import casino from './casino.jpg';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <>
            <header>
                <h1>Gra karciana Oczko!</h1>
            </header>
            <nav className="buttons">
                <Link to="/"><button variant="success">Zasady gry</button></Link>
                <Link to="/newgame"><button variant="success">Nowa gra</button></Link>
                <Link to="/PlayerOne"><button variant="success">Gra jednoosobowa</button></Link>
                <Link to="/PlayerTwo"><button variant="success">Gra dwuosobowa</button></Link>
            </nav>    

            </>          
        )
    }
}
export default Header