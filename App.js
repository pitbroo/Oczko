import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Footer from './Footer.js';
import Header from './Header.js';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";



function App() {
  return (
    <div className="app">
      <div className="content">
        <div className="content-inside">
          <Router>
            <Header />
            <Main />
          </Router>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
