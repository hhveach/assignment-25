import ReactDOM from 'react-dom';
import React from 'react';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';


export const NavView = React.createClass({

  // _dynamicNav: function(isUser){
  //   let logged;
  //   if(typeof isUser._id === 'undefined'){
  //   logged = [
  //     {routeName: 'HOME', text: 'HOME', urlHash: ''},
  //     {routeName: 'LOGIN', text: 'LOGIN', urlHash: 'login'},
  //     {routeName: 'SIGNUP', text: 'SIGNUP', urlHash: 'signup'},
  //     {routeName: 'CHIRPS', text: 'CHIRPS', urlHash: 'chirps'},
  //   ];
  //   };
  //   else {
  //   logged = [
  //     {routeName: 'HOME', text: 'HOME', urlHash: ''},
  //     {routeName: 'LOGOUT', text: 'LOGOUT', urlHash: 'logout'},
  //     {routeName: 'NEWCHIRP', text: '+CHIRP', urlHash: 'newChirp'},
  //     {routeName: 'CHIRPS', text: 'CHIRPS', urlHash: 'chirps'},
  //   ];
  //   };
  //   return logged;
  // },

  _handleNavClick: function(evt){
    ACTIONS.changeNav(evt.target.dataset.route, evt.target.dataset.route.toLowerCase());
  },

  render: function(){
    return (
      <nav className="nav">
        <h1>Welcome to <span className="chirp-span">Chirp!</span></h1>
        <img className="nav-img" src={'https://camo.githubusercontent.com/1c8f35698f41f6df2b16bf2e82f68d1fa9dac448/68747470733a2f2f7469792d6c6561726e2d636f6e74656e742e73332e616d617a6f6e6177732e636f6d2f34323666373437352d63686972702d6c6f676f2e706e67'}/>
        <div className="nav-bar">
          <span className="nav-btn" onClick={this._handleNavClick} data-route="HOME">HOME</span>
          <span className="nav-btn" onClick={this._handleNavClick} data-route="LOGIN">LOGIN</span>
          <span className="nav-btn" onClick={this._handleNavClick} data-route="SIGNUP">SIGNUP</span>
          <span className="nav-btn" onClick={this._handleNavClick} data-route="CHIRPS">CHIRPS</span>
        </div>
      </nav>
    )
  }
});
