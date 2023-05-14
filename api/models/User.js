const mongoose = require('mongoose');
const {model} = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    min:4,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    min:8
  }
});

const userModel = model('User', UserSchema);
module.exports = userModel;