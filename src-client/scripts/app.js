import ReactDOM from 'react-dom';
import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';
import {SingleChirp, AllChirps} from './models/chirpModels.js';
import {ViewController} from './ViewController.js';

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start();
	},

	routes: {
		'chirps' : 'chirpPage',
		'login' : 'loginPage',
		'signup' : 'signupPage',
		'logout' : 'logoutPage',
		'' : 'homePage'
	},

	chirpPage: function(){
		ReactDOM.render(<ViewController route={'CHIRPS'}/>, document.querySelector('#app-container'));
	},

	loginPage: function(){
		ReactDOM.render(<ViewController route={'LOGIN'}/>, document.querySelector('#app-container'));
	},

	logoutPage: function(){
		ReactDOM.render(<ViewController route={'LOGOUT'}/>, document.querySelector('#app-container'));
	},

	signupPage: function(){
		ReactDOM.render(<ViewController route={'SIGNUP'}/>, document.querySelector('#app-container'));
	},

	homePage: function(){
		ReactDOM.render(<ViewController route={'HOME'}/>, document.querySelector('#app-container'));
	},

});

const MadApp = new AppRouter();
