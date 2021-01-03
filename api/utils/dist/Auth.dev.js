"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");

var passport = require("passport");

var User = require("../models/User");

var _require = require("../config"),
    SECRET = _require.SECRET;

var bp = require("body-parser");
/**
 * @DESC To get user by id
 */


var getUserDetails = function getUserDetails(req, res) {
  var id, user;
  return regeneratorRuntime.async(function getUserDetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            _id: id
          }));

        case 3:
          user = _context.sent;

          if (user) {
            if (user.length == 0) res.status(200).json({
              message: "No User",
              success: true
            });else {
              res.status(200).send(user);
            }
          } else {
            user.createdAt = "0";
            console.log(user.createdAt);
            res.status(400).json({
              user: user,
              message: "couldn't find any user with that id",
              id: req.id,
              success: false
            });
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};
/**
 * @DESC To Login the user (ADMIN, SUPER_ADMIN, USER)
 */


var userLogin = function userLogin(userCreds, res) {
  var email, password, user, token, result;
  return regeneratorRuntime.async(function userLogin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          email = userCreds.email, password = userCreds.password; // First Check if the username is in the database

          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 3:
          user = _context2.sent;

          if (user) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: "Email is not found. Invalid login credentials.",
            code: "ENF",
            success: false
          }));

        case 6:
          if (!(password == user.password)) {
            _context2.next = 12;
            break;
          }

          // Sign in the token and issue it to the user
          token = jwt.sign({
            user_id: user._id,
            username: user.username,
            email: user.email
          }, SECRET, {
            expiresIn: "1 days"
          });
          result = {
            email: user.email,
            token: "Bearer ".concat(token),
            expiresIn: "24 Hours"
          };
          return _context2.abrupt("return", res.status(200).json(_objectSpread({}, result, {
            user_id: user.id,
            message: "Hurray! You are now logged in.",
            code: "SCS",
            success: true
          })));

        case 12:
          return _context2.abrupt("return", res.status(403).json({
            message: "Incorrect password.",
            code: "IP",
            success: false
          }));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
};
/**
 * @DESC To update user profile (ADMIN, SUPER_ADMIN, USER)
 */


var updateProfile = function updateProfile(req, res) {
  var id, user;
  return regeneratorRuntime.async(function updateProfile$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            _id: id
          }, function (err, foundObject) {
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
                  foundObject.name = req.body.name;
                }

                if (req.body.last_name) {
                  foundObject.last_name = req.body.last_name;
                }

                if (req.body.email) {
                  foundObject.email = req.body.email;
                }

                if (req.body.address) {
                  foundObject.address = req.body.address;
                }

                foundObject.save(function (err) {
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
                });
              }
            }
          }));

        case 3:
          user = _context3.sent;

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var validateUsername = function validateUsername(username) {
  var user;
  return regeneratorRuntime.async(function validateUsername$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(User.findOne({
            username: username
          }));

        case 2:
          user = _context4.sent;
          return _context4.abrupt("return", user ? false : true);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
};
/**
 * @DESC Passport middleware
 */


var userAuth = passport.authenticate("jwt", {
  session: false
});
/**
 * @DESC Check email validation
 */

var validateEmail = function validateEmail(email) {
  var user;
  return regeneratorRuntime.async(function validateEmail$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 2:
          user = _context5.sent;
          return _context5.abrupt("return", user ? false : true);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
};

var serializeUser = function serializeUser(user) {
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
  userAuth: userAuth,
  userLogin: userLogin,
  updateProfile: updateProfile,
  serializeUser: serializeUser,
  getUserDetails: getUserDetails
};