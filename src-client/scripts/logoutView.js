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
      <div className="logout-view">
          <h3>Are You Sure You Want To Logout?</h3>
        <form className="login" onSubmit={this._handleLogout}>
          <button type="submit" className="logout-btn">LOGOUT</button>
        </form>
      </div>
    )
  }
});
