import ReactDOM from 'react-dom';
import React from 'react';
import {NavView} from './navComponent.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';


export const NewChirpForm = React.createClass({

  _handleSubmit: function(evt){
    evt.preventDefault();
    let current = evt.target;
    if(current.chirpMsg.value.length > 170){
      throw new Error('Chirps are limited to 170 characters!');
    }
    let newChirpInput = {
      msg: current.chirpMsg.value,
      imgLink: current.chirpImg.value,
    }
    ACTIONS.saveChirp(newChirpInput);

  },

  render: function(){
    return (
        <div className="enter-chirp">
          <h3 className="blue">Chirp! Away</h3>
          <form className="chirp-form" onSubmit={this._handleSubmit}>

            <div className="new-chirp">
              <label>Title</label>
              <input type="text" placeholder="Chirp!" name="chirpTitle"/>
            </div>

            <div className="new-chirp">
              <label>Chirp! Content</label>
              <input type="text" placeholder="Chirp!" name="chirpMsg"/>
            </div>

            <div className="new-chirp">
              <label>Photo</label>
              <input type="text" placeholder="Image" name="chirpImg"/>
            </div>

            <button type="submit" className="main-btn">Chirp! It</button>
          </form>
        </div>
    )
  }
});
