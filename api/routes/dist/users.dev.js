"use strict";

var router = require("express").Router(); //const User = require("../models/User");
// Bring in the User Registration function


var _require = require("../utils/Auth"),
    userAuth = _require.userAuth,
    userLogin = _require.userLogin,
    updateProfile = _require.updateProfile,
    serializeUser = _require.serializeUser; // Admin Login Route


router.post("/login", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(userLogin(req.body, res));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Profile Route

router.get("/profile", userAuth, function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", res.json(serializeUser(req.user)));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // User, Admin and SuperAdmin Profile Update Route

router.put("/edit-profile/:id", userAuth, function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(updateProfile(req, res));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
});
module.exports = router;