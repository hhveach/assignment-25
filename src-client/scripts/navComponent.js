import ReactDOM from 'react-dom';
import React from 'react';


export const NavView = React.createClass({
  // getInitialState: function(){
  //
  // },

  render: function(){
    return (
      <nav className="nav">
        <h1>Welcome to <span>Chirp!</span></h1>
        <img className="nav-img" src={'https://camo.githubusercontent.com/1c8f35698f41f6df2b16bf2e82f68d1fa9dac448/68747470733a2f2f7469792d6c6561726e2d636f6e74656e742e73332e616d617a6f6e6177732e636f6d2f34323666373437352d63686972702d6c6f676f2e706e67'}/>
      </nav>
    )
  }
});
