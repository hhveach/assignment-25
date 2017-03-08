import ReactDOM from 'react-dom';
import React from 'react';


export const RegisterView = React.createClass({
  // getInitialState: function(){
  //
  // },

  _handleSubmit: function(evt){
    evt.preventDefault();

  },

  _handleReset: function(evt){
    evt.preventDefault();

  },

  render: function(){
    return (
      <div className="register-main">
        <h3 className="blue">Sign-Up for Chirp!</h3>
        <form className="register-form">
          <div className="register">
            <label>Your Name</label>
            <input type="text" placeholder="First" name="lastName"/>
            <input type="text" placeholder="Last" name="firstName"/>
          </div>

          <div className="register">
            <label>Username</label>
            <input type="text" placeholder="Username" name="regUsername"/>
          </div>

          <div className="register">
            <label>Password</label>
            <input type="text" placeholder="Password" name="regPasswordFirst"/>
            <input type="text" placeholder="Confirm Password" name="regPasswordLast"/>
          </div>

          <div className="register">
            <label>Avatar Photo</label>
            <input type="text" placeholder="Image" name="regImg"/>
          </div>

          <button type="submit" onSubmit={this._handleSubmit} className="main-btn">Register</button>
          <button onClick={this._handleReset} className="main-btn">Reset Form</button>

        </form>
      </div>
    )

  }
});
