import ReactDOM from 'react-dom';
import React from 'react';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';


export const RegisterView = React.createClass({

  _handleSubmit: function(evt){
    evt.preventDefault();
    let current = evt.target;
    let newUserInput = {
      username: current.regUsername.value,
      personalName: current.newName.value,
      avatarUrl: current.regImg.value,
      password: current.regPassword.value,
    }

    ACTIONS.userRegister(newUserInput);
    ACTIONS.changeNav('HOME', '');
  },

  render: function(){
    return (
      <div className="register-main">
        <h3 className="blue">Sign-Up for Chirp!</h3>
        <form className="register-form" onSubmit={this._handleSubmit}>
          <div className="register">
            <label>Your Name</label>
            <input type="text" placeholder="Name" name="newName"/>
          </div>

          <div className="register">
            <label>Username</label>
            <input type="text" placeholder="Username" name="regUsername"/>
          </div>

          <div className="register">
            <label>Password</label>
            <input type="password" placeholder="Password" name="regPassword"/>
          </div>

          <div className="register">
            <label>Avatar Photo</label>
            <input type="text" placeholder="Image" name="regImg"/>
          </div>

          <button type="submit" className="main-btn">Register</button>
        </form>
       </div>
    )
  }
});
