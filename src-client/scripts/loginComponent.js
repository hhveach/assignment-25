import ReactDOM from 'react-dom';
import React from 'react';


export const LoginView = React.createClass({
  // getInitialState: function(){
  //
  // },

  render: function(){
    return (
      <div className="login-view">
        <h3 className="blue">Login To Your Account</h3>
        <div className="login">
          <label>Username</label>
          <input type="text" placeholder="Username"/>
          <label>Password</label>
          <input type="text" placeholder="Password"/>
          <button className="main-btn">Login</button>
        </div>
      </div>
    )
  }
});
