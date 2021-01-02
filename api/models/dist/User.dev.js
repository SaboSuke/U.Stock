"use strict";

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model;

var UserSchema = new Schema({
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});
module.exports = model("users", UserSchema);