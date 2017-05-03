import ReactDOM from 'react-dom';
import React from 'react';
import {NewChirpForm} from './newChirpComponent.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';


export const ChirpView = React.createClass({

  _chirpsJSX: function(chirps){
    let final = chirps.map(function(listEl, i){

    return (
            <div className="chirp-data" key={i}>
              <img src={listEl.imgLink}/>
              <p>{listEl.msg}</p>
            </div>
          )
    }).reverse()
    return final;
  },

  render: function(){
    let enterChirp = <div className="maybe"></div>;
    // let all = this.props.chirpsList;

    if(typeof this.props.currentUser._id !== 'undefined'){enterChirp = <NewChirpForm/>}

    return (   <div className="chirp">
                <div className="big-chirp">
                {this._chirpsJSX(this.props.chirpsList)}
                </div>
                {enterChirp}
               </div>
           )
  }
});
