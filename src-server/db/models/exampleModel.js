const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ----------------------
// DATA TABLE
// ----------------------
const chirpSchema = new Schema({
  // example of optional fields
  msg:        { type: String, required: true },
  imgLink:    { type: String },
  likes:      [{type: Schema.Types.ObjectId, ref: 'User'}],
  _userId:    { type: Schema.Types.ObjectId, ref: 'User'},
  userInfo:   { type: String},
  userImg:    { type: String}
})


module.exports = mongoose.model('Chirp', chirpSchema)
