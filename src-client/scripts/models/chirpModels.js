import Backbone from 'backbone';

export const SingleChirp = Backbone.Model.extend({
  urlRoot: '/api/chirps',
  idAttribute: '_id'
});

export const AllChirps = Backbone.Collection.extend({
  model: SingleChirp,
  url: '/api/chirps'
});
