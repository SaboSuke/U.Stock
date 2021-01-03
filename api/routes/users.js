const router = require("express").Router();
//const User = require("../models/User");
// Bring in the User Registration function
const {
  userAuth,
  userLogin,
  updateProfile,
  serializeUser,
  getUserDetails,
} = require("../utils/Auth");

// user details Route
router.get("/get-user-details/:id", async (req, res) => {
  await getUserDetails(req, res);
});

// Admin Login Route
router.post("/login", async (req, res) => {
  await userLogin(req.body, res);
});

// Profile Route
router.get("/profile", userAuth, async (req, res) => {
  return res.json(serializeUser(req.user));
});

// User, Admin and SuperAdmin Profile Update Route
router.put("/edit-profile/:id", async (req, res) => {
  await updateProfile(req, res);
});


module.exports = router;
