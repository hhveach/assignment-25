import Backbone from 'backbone';
import {STORE} from './store.js';
import {SingleChirp, AllChirps} from './models/chirpModels.js';
import {UserModel} from './models/model-user.js'

export const ACTIONS = {

  saveChirp: function(newChirpEntry){
    let newChirp = new SingleChirp();
      newChirp.set(newChirpEntry);
      newChirp.save().then(function(serverRes){
        ACTIONS.getAllChirps();
      })
  },

  getAllChirps: function(){
    let newColl = new AllChirps();
      newColl.fetch().then(function(serverRes){
        STORE.setStore('chirpsList', serverRes);
      })
  },

  changeNav: function(selectRoute, urlHash){
  	STORE.setStore('currentNavRoute', selectRoute)
      if(urlHash === 'home'){urlHash = ''};
  	  window.location.hash = urlHash;
  },

  userLogin: function(username, password){
    UserModel.logIn(username, password).then(function(serverRes){
     STORE.setStore('currentUser', serverRes)
     ACTIONS.changeNav('CHIRPS', 'chirps');
      });
  },

  userRegister: function(newUserObj){
   UserModel.register(newUserObj).then(function(serverRes){
     ACTIONS.changeNav('HOME', '');
      });
  },

  userLogout: function(){
   UserModel.logOut().then(function(serverRes){
     STORE.setStore('currentUser', '');
     ACTIONS.changeNav('HOME', '');
   });
  },

  getUser: function(){
   UserModel.getCurrentUser().then(function(serverRes){
     STORE.setStore('currentUser', serverRes)
   });
  },
};
