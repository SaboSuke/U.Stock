const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const { SECRET } = require("../config");
const bp = require("body-parser");

/**
 * @DESC To get user by id
 */
const getUserDetails = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    if (user) {
        if (user.length == 0)
            res.status(200).json({
            message: "No User",
            success: true,
            });
        else {
            res.status(200).send(user);
        }
    } else {
        user.createdAt = "0";
        console.log(user.createdAt)
        res.status(400).json({
            user,
            message: "couldn't find any user with that id",
            id: req.id,
            success: false,
        });
    }
};

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
        code: "ENF",
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
        email: user.email,
        token: `Bearer ${token}`,
        expiresIn: "24 Hours",
    };

    return res.status(200).json({
      ...result,
      user_id: user.id,
      message: "Hurray! You are now logged in.",
      code: "SCS",
      success: true,
    });
    } else {
    return res.status(403).json({
        message: "Incorrect password.",
        code: "IP",
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
                if (req.body.name) {
                    foundObject.name = req.body.name
                }
                if (req.body.last_name) {
                  foundObject.last_name = req.body.last_name;
                }
                if (req.body.email) {
                  foundObject.email = req.body.email;
                }
                if (req.body.address) {
                    foundObject.address = req.body.address
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
  getUserDetails,
};