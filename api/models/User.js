const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: false
    },
    last_name: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = model("users", UserSchema);