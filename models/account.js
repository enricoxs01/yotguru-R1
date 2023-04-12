const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    completeStatus: {
        type: Boolean
    },
    user: { 
        type: String,
        required: true
        },
    actNumber: {
        type: String,
        required: true },
    firstName: {
         type: String },
    middleName: {
            type: String},
    lastName: {
            type: String},
    email:  {
            type: String,
            required: true},
    recoveryEmail: {
            type: String},
    phone:  {
            type: Number},
    yguser: { 
            type: Schema.Types.ObjectId,
            ref: 'User' },
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Account', accountSchema);