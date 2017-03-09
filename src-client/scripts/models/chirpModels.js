import ReactDOM from 'react-dom';
import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';

export const SingleChirp = Backbone.Model.extend({
  urlRoot: '/api/chirps',
  idAttribute: '_id'
});

export const AllChirps = Backbone.Collection.extend({
  model: SingleChirp,
  url: '/api/chirps'
});
