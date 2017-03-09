import ReactDOM from 'react-dom';
import React from 'react';


export const ChirpView = React.createClass({

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
    return (
      <div className="chirp">
        {this._chirpsJSX}
      </div>
    )
  }
});
