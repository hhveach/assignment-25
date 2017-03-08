import ReactDOM from 'react-dom';
import React from 'react';
import {NavView} from './navComponent.js';


export const ChirpView = React.createClass({
  // getInitialState: function(){
  //
  // },

  render: function(){
    return (
      <div className="chirp">
        <NavView/>
        <div className="chirp-data">
        <h3>Chirp! Title</h3><p>Author Name<span>Date Posted</span></p>
        <img src={''}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ipsam a reiciendis
           nam ducimus saepe, facilis animi voluptatem!
           Maxime enim consequatur eum dicta eos, aperiam architecto, magnam adipisci corrupti. Atque!
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ad, porro labore
           corporis aut eligendi, incidunt unde fugit ipsa nihil error facilis. Ut asperiores voluptatem
           molestias, id qui ea velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
           dignissimos possimus soluta. Aperiam ipsam blanditiis, libero sequi hic illum! Obcaecati reiciendis,
           repellendus corporis omnis rem rerum magnam saepe minus eos.
        </p>
      </div>
      </div>

    )
  }
});
