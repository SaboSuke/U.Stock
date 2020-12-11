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
  }
}, {
  timestamps: true
});
module.exports = model("users", UserSchema);