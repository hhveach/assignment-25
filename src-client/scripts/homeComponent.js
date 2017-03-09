import ReactDOM from 'react-dom';
import React from 'react';
import {NavView} from './navComponent.js';

export const HomeView = React.createClass({

  render: function(){
    return (
      <div className="home">
        <h2>Welcome to Chirp!</h2>
        <p>Chirp! is a social blogging site dedicated to free thought in 170 character posts.
           Simply register (which is free!) and start Chirp!ing. The sky is the limit, so
           happy Chirp!ing!</p>
      </div>
    )
  }
});
