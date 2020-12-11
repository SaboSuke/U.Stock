const router = require("express").Router();
//const User = require("../models/User");
// Bring in the User Registration function
const {
  userAuth,
  userLogin,
  updateProfile,
  serializeUser,
} = require("../utils/Auth");

// Admin Login Route
router.post("/login", async (req, res) => {
  await userLogin(req.body, res);
});

// Profile Route
router.get("/profile", userAuth, async (req, res) => {
  return res.json(serializeUser(req.user));
});

// User, Admin and SuperAdmin Profile Update Route
router.put(
  "/edit-profile/:id",
  userAuth,
  async (req, res) => {
    await updateProfile(req, res)
  }
);


module.exports = router;
