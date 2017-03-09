import React from 'react';
import {HomeView} from './homeComponent.js';
import {ChirpView} from './chirpsComponent.js';
import {LoginView} from './loginComponent.js';
import {RegisterView} from './registerComponent.js';
import {NavView} from './navComponent.js';
import {LogOutView} from './LogOutView.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';

export const ViewController = React.createClass({
  getInitialState: function(){
    ACTIONS.changeNav(this.props.route, window.location.hash)
    let storeObject = STORE.getStoreData();
    return storeObject;
  },

  componentDidMount: function(){
		let comp = this;
		STORE.onStoreChange(function(){
			let newStoreObj = STORE.getStoreData();
			comp.setState(newStoreObj)
		})
	},

  render: function(){
    let renderComp;
    switch(this.state.currentNavRoute){
      case 'CHIRPS':
        renderComp = <ChirpView {...this.state}/>;
        break;
      case 'LOGIN':
        renderComp = <LoginView {...this.state}/>;
        break;
      case 'LOGOUT':
        renderComp = <LogOutView {...this.state}/>;
        break;
      case 'SIGNUP':
        renderComp = <RegisterView {...this.state}/>;
        break;
      case 'HOME':
        renderComp = <HomeView {...this.state}/>;
        break;

      default:
    }
    return (
      <div className="container">
        <NavView {...this.state}/>
        {renderComp}
      </div>
    )
  }
});
