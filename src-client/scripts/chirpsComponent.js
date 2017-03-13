import ReactDOM from 'react-dom';
import React from 'react';
import {NewChirpForm} from './newChirpComponent.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';


export const ChirpView = React.createClass({

  getInitialState: function(){
    return STORE.getStoreData();
  },

  componentWillMount: function(){
    ACTIONS.getAllChirps();
  },

  componentDidMount: function(){
    ACTIONS.getAllChirps();
  },

  // componentDidUpdate: function(){
  //   ACTIONS.getAllChirps();
  // },

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
    let all = this.props.chirpsList;

    if(typeof this.props.currentUser._id !== 'undefined'){enterChirp = <NewChirpForm/>}

    return (   <div className="chirp">
                {enterChirp}
                <div className="big-chirp">
                {this._chirpsJSX(all)}
                </div>
               </div>
           )
  }
});
