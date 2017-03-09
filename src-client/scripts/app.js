import ReactDOM from 'react-dom';
import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';
import {SingleChirp, AllChirps} from './models/chirpModels.js';
// import {HomeView} from './homeComponent.js';
// import {ChirpView} from './chirpsComponent.js';
// import {LoginView} from './loginComponent.js';
// import {RegisterView} from './registerComponent.js';
// import {NavView} from './navComponent.js';
import {ViewController} from './ViewController.js';

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start();
	},

	routes: {
		'chirps' : 'chirpPage',
		'login' : 'loginPage',
		'signup' : 'signupPage',
		'' : 'homePage'
	},

	chirpPage: function(){
		ReactDOM.render(<ViewController route={'CHIRPS'}/>, document.querySelector('#app-container'));
	},

	loginPage: function(){
		ReactDOM.render(<ViewController route={'LOGIN'}/>, document.querySelector('#app-container'));
	},

	signupPage: function(){
		ReactDOM.render(<ViewController route={'SIGNUP'}/>, document.querySelector('#app-container'));
	},

	homePage: function(){
		ReactDOM.render(<ViewController route={'HOME'}/>, document.querySelector('#app-container'));
	},

});

const MadApp = new AppRouter();
