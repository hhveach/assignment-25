export const STORE = {
	_data: {
		currentNavRoute: '',
		currentUser: '',
		chirpsList: []
	},

	getStoreData: function(){
		return this._data;
	},

  setStore: function(dataProp, dataPropVal){
    this._data[dataProp] = dataPropVal;

		if(typeof this._callbackFunction === 'function'){this._callbackFunction();};
  },

  onStoreChange: function(callback){

		if(typeof callback !== 'function'){
    	throw new Error('must have a callback function')
    	}

    if(typeof this._callbackFunction === 'function'){
    	throw new Error('already fired')
    	}

    this._callbackFunction = callback;
  },
}
