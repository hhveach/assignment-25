import ReactDOM from 'react-dom';
import React from 'react';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';


export const LogOutView = React.createClass({

  _handleLogout: function(evt){
    evt.preventDefault();
    let current = evt.target;
    ACTIONS.userLogout();
  },

  render: function(){
    return (
      <div className="login-view">
        <h3 className="blue">Logout?</h3>
        <form className="login" onSubmit={this._handleLogout}>
          <button type="submit" className="main-btn">LOGOUT</button>
        </form>
      </div>
    )
  }
});
