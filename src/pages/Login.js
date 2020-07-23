import React from 'react'
import './Login.css'


function Login(props) {
    return(
      <div className="login">
        <form>
          <h2>Please Login</h2>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block" type="button">Sign in</button>
        </form>
      </div>
    );
}

export default Login;