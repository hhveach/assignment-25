import ReactDOM from 'react-dom';
import React from 'react';
import {NewChirpForm} from './newChirpComponent.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';


export const ChirpView = React.createClass({

  getInitialState: function(){
    return STORE.getStoreData();
  },

  componentDidMount: function(){
    ACTIONS.getAllChirps();
  },

  _chirpsJSX: function(){
    let all = ACTIONS.getAllChirps();
    let final = all.map(function(listEl){
      return (
        <div className="chirp-data">
          {/* <h3>Chirp! Title</h3><p>Author Name<span>Date Posted</span></p> */}
          <img src={listEl.imgLink}/>
          <p>{listEl.msg}</p>
        </div>
      )
    });
    return final;
  },

  render: function(){
    let enterChirp = <div className="maybe"></div>;
    if(typeof this.props.currentUser._id !== 'undefined'){enterChirp = <NewChirpForm/>}
    return (
      <div className="chirp">
        {enterChirp}
        {this._chirpsJSX}
      </div>
    )
  }
});
