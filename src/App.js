// var express = require("express");
// var path = require("path");

// var app = exrpess();
// app.use(express.static(path.join(__dirname,"/html")));

import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Poster from './components/Poster'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import BoardPage from './pages/BoardPage'
import Login from './pages/Login'
import {Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="page-wrapper">
      <div className="single-container">
        <Router>
        <div className="navbar-inner">
          <div className="container">
            <Header/>
              <div className="topnav">
                
                  <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/About" component={AboutPage}/>
                    <Route path="/Board" component={BoardPage}/>
                    <Route path="/Login" component={Login}/>
                    
                  </Switch>
              
                <div>
                  <Link to="/">Home</Link>
                  <Link to="/About">About</Link>
                  <a href="http://fast-track.asia/companies/">COMPNAIES</a>
                  <a href="http://fast-track.asia/?cat=69">NEWS</a>
                  <a href="https://m.blog.naver.com/woony56">BLOG</a>
                  <Link to="/Board">Board</Link>
                  <Link to="/Login">Login</Link>
                </div>
              </div>
            </div>
        </div>
        </Router>;
        <div><Footer/></div>
      
      </div>  
    </div>
  );
}

export default App;

// funtion ExampleWithManyStates() {
  
//   const [age, setAge] = useState(42);
//   const [fruit, setFruit] = useState('banana');
//   const [todos, setTodos] = useState([{ text : 'Learn Hooks'}])
// }