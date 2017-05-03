import ReactDOM from 'react-dom';
import React from 'react';
import {NavView} from './navComponent.js';
import {STORE} from './store.js';

export const HomeView = React.createClass({

  render: function(){
    return (
      <div className="home">
        <h2>Welcome to Chirp!</h2>
        <p>Chirp! is a healthy concoction of LiveJournal of the future meets Twitter. We are a social blogging site
           dedicated to helping you project your voice. Chirp your heart out in just
           170 characters. Simply register (which is free!) and start Chirp!ing. Remember, the sky is
           the limit, so happy Chirp!ing!</p>
      </div>
    )
  }
});
