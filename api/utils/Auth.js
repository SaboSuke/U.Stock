const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const { SECRET } = require("../config");
const bp = require("body-parser");

/**
 * @DESC To Login the user (ADMIN, SUPER_ADMIN, USER)
 */
const userLogin = async(userCreds, res) => {
  let { email, password } = userCreds;
  // First Check if the username is in the database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      message: "Email is not found. Invalid login credentials.",
      success: false,
    });
  }
  
  // Now check for the password
  if (password == user.password) {
    // Sign in the token and issue it to the user
    let token = jwt.sign(
      {
        user_id: user._id,
        username: user.username,
        email: user.email,
      },
      SECRET,
      { expiresIn: "1 days" }
    );

    let result = {
      username: user.username,
      email: user.email,
      token: `Bearer ${token}`,
      expiresIn: '24 Hours',
    };

    return res.status(200).json({
      ...result,
      message: "Hurray! You are now logged in.",
      success: true,
    });
  } else {
    return res.status(403).json({
      message: "Incorrect password.",
      success: false,
    });
  }
};

/**
 * @DESC To update user profile (ADMIN, SUPER_ADMIN, USER)
 */
const updateProfile = async(req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ _id: id }, (err, foundObject) => {
        if (err) {
            res.status(500).json({
                message: "Error, check updateProfile",
                success: false
            });
        } else {
            if (!foundObject) {
                res.status(404).json({
                    message: "Error, user id not found",
                    success: false
                });
            } else {
                if (req.body.address) {
                    foundObject.address = req.body.address
                }
                if (req.body.name) {
                    foundObject.name = req.body.name
                }
                if (req.body.email) {
                    foundObject.email = req.body.email
                }
                if (req.body.password) {
                    foundObject.password = req.body.password
                }
                if (req.body.birthday) {
                    foundObject.birthday = req.body.birthday
                }
                if (req.body.sex) {
                    foundObject.sex = req.body.sex
                }
                if (req.body.phone) {
                    foundObject.phone = req.body.phone
                }
                if (req.body.city) {
                    foundObject.city = req.body.city
                }
                if (req.body.address) {
                    foundObject.address = req.body.address
                }
                if (req.body.avatar) {
                    foundObject.avatar = req.body.avatar
                }
                foundObject.save(function(err) {
                    if (err) {
                        res.status(500).json({
                            message: "Error, couldn't save user!",
                            success: false
                        });
                    } else {
                        res.status(201).json({
                            message: 'User info has been updated successfully!',
                            success: true
                        });
                    }
                })
            }
        }
    });
}

const validateUsername = async username => {
    let user = await User.findOne({ username });
    return user ? false : true;
};

/**
 * @DESC Passport middleware
 */
const userAuth = passport.authenticate("jwt", { session: false });

/**
 * @DESC Check email validation
 */
const validateEmail = async email => {
    let user = await User.findOne({ email });
    return user ? false : true;
};

const serializeUser = user => {
    return {
        username: user.username,
        email: user.email,
        name: user.name,
        _id: user._id,
        updatedAt: user.updatedAt,
        createdAt: user.createdAt,
        birthday: user.birthday,
        sex: user.sex,
        phone: user.phone,
        city: user.city,
        address: user.address,
        avatar: user.avatar
    };
};

module.exports = {
  userAuth,
  userLogin,
  updateProfile,
  serializeUser,
};