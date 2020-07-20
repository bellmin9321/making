import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutPage from './AboutPage'
import BoardPage from './BoardPage'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


function LoginPage(props) {
    return(
        <div className="page-wrapper">
      <div className="single-container">
        <BrowserRouter>
        <div className="navbar-inner">
          <div className="container">
            <Header/>
              <div className="topnav">
                
                  <Switch>
                    <Route path="/About" component={AboutPage}/>
                    <Route path="/Board" component={BoardPage}/>
                  </Switch>
              
                <div>
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
          
          <div>Login</div>

        </BrowserRouter>
      </div>  
    </div>
    );
}

export default LoginPage;