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

		if(typeof _callbackFunction === 'function'){this._callbackFunction();};
  },

  onStoreChange: function(callback){
    this._callbackFunction = callback;
  },
}
