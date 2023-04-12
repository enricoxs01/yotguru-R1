const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const vesselSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  hullId: {
    type: String,
    required: true
  },
  LOA: {
    type: Number,
    required: true
  },
  manufacturer: {
    type: String
  },
  model: {
    type: String
  },
  modelYear: { 
    type: Number
  },
  account:  {
    type: Schema.Types.ObjectId,
    ref: 'Account' }
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Vessel', vesselSchema);