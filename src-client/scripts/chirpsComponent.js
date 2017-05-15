import ReactDOM from 'react-dom';
import React from 'react';
import {NewChirpForm} from './newChirpComponent.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';


export const ChirpView = React.createClass({

  componentWillReceiveProps(){
    console.log(this.props.chirpsList);
    console.log(this.props.currentUser);
  },

  _chirpsJSX: function(chirps, user){
    let final = chirps.map(function(listEl, i){

    return (
            <div className="chirp-data" key={i}>
              <div className="main-image">
                <img src={listEl.imgLink}/>
              </div>
              <div className="twitter">
                <img src={user.avatarUrl}/>
                <p>{user.personalName}</p>
                <p>@{user.username}</p>
                <p>{listEl.msg}</p>
            </div>
            </div>
          )
    }).reverse()
    return final;
  },

  render: function(){
    console.log(this.props.chirpsList);
    let enterChirp = <div className="maybe"></div>;

    if(typeof this.props.currentUser._id !== 'undefined'){enterChirp = <NewChirpForm {...this.props}/>}

    return (   <div className="chirp">
                <div className="big-chirp">
                {this._chirpsJSX(this.props.chirpsList, this.props.currentUser)}
                </div>
                {enterChirp}
               </div>
           )
  }
});
