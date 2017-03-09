import ReactDOM from 'react-dom';
import React from 'react';
import {NavView} from './navComponent.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';


export const NewChirpForm = React.createClass({

  _handleSubmit: function(evt){
    evt.preventDefault();
    let current = evt.target;
    let newChirpInput = {
      msg: current.chirpMsg.value,
      imgLink: current.chirpImg.value,
    }

    ACTIONS.saveChirp(newChripInput);
    ACTIONS.changeNav('CHIRPS', 'chirps');
  },

  render: function(){
    return (
        <div className="register-main">
          <h3 className="blue">Chirp! Away</h3>
          <form className="chirp-form" onSubmit={this._handleSubmit}>

            <div className="new-chirp">
              <label>Password</label>
              <input type="text" placeholder="Chirp!" name="chirpMsg"/>
            </div>

            <div className="new-chirp">
              <label>Photo</label>
              <input type="text" placeholder="Image" name="chirpImg"/>
            </div>

            <button type="submit" className="main-btn">Register</button>

          </form>
         </div>
    )
  }
});
