import ReactDOM from 'react-dom';
import React from 'react';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';


export const LoginView = React.createClass({

  _handleLogin: function(evt){
    evt.preventDefault();
    let current = evt.target;
    let user = current.usr.value;
    let pass = current.pwd.value;
    ACTIONS.userLogin(user, pass);
    ACTIONS.changeNav('CHIRPS', 'chirps');
  },

  render: function(){
    return (
      <div className="login-view">
        <h3 className="blue">Login To Your Account</h3>
        <form className="login" onSubmit={this._handleLogin}>
          <label>Username</label>
          <input type="text" placeholder="Username" name="usr"/>
          <label>Password</label>
          <input type="password" placeholder="Password" name="pwd"/>
          <button type="submit" className="main-btn">Login</button>
        </form>
      </div>
    )
  }
});
