import ReactDOM from 'react-dom';
import React from 'react';
import {ChirpView} from './chirpsComponent.js';
import {LoginView} from './loginComponent.js';
import {RegisterView} from './registerComponent.js';
import {NavView} from './navComponent.js';


export const HomeView = React.createClass({
  // getInitialState: function(){
  //
  // },

  render: function(){
    return (
    <div className="home">
      <NavView/>
      <RegisterView/>
      <LoginView/>
    </div>
    );

  }
});
