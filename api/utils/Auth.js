const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const { SECRET } = require("../config");




/**
 * @DESC To Login the user 
 */


const userLogin = async (userCreds, res) => {
    let { email, password } = userCreds;
    // First Check if the username is in the database
    const user = await User.findOne({ email });
    //const usertest = await User.findOne({  name: "Hammadi" });
    if (!user) {
      return res.json({
        message: "Email is not found. Invalid login credentials.",
        success: false
      });
    }
    // That means user is existing 
    // Now check for the password
    // let isMatch = await bcrypt.compare(password, user.password);
    if (password==user.password) {
      // Sign in the token and issue it to the user
      let token = jwt.sign(
        {
          user_id: user._id,
          username: user.username,
          email: user.email
        },
        SECRET,
        { expiresIn: "7 days" }
      );
  
      let result = {
        username: user.username,
        role: user.role,
        email: user.email,
        token: `Bearer ${token}`,
        expiresIn: 168
      };
  
      return res.status(200).json({
        ...result,
        message: "Hurray! You are now logged in.",
        success: true
      });
    } else {
      return res.status(403).json({
        message: "Incorrect password.",
        success: false
      });
    }
  };

  module.exports = {
    userLogin
  };
