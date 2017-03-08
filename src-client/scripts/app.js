import ReactDOM from 'react-dom';
import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';
import {HomeView} from './homeComponent.js';
import {ChirpView} from './chirpsComponent.js';
import {LoginView} from './loginComponent.js';
import {RegisterView} from './registerComponent.js';
import {NavView} from './navComponent.js';

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start();
		console.log('wired');
	},

	routes: {
		'chirps' : 'chirpPage',
		'login' : 'loginPage',
		'register' : 'registerPage',
		'' : 'homePage'
	},

	chirpPage: function(){
		ReactDOM.render(<ChirpView/>, document.querySelector('#app-container'));
	},

	loginPage: function(){

	},

	registerPage: function(){

	},

	homePage: function(){
		ReactDOM.render(<HomeView/>, document.querySelector('#app-container'));
	},

});

const MadApp = new AppRouter();
