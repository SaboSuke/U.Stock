const cors = require("cors");
const router = require("express").Router();
const exp = require("express");
const bp = require("body-parser");
const passport = require("passport");
const { connect } = require("mongoose");
const { success, error } = require("consola");
 
// Initialize the application
const app =exp();
app.use(bp.json());
//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

// Bring in the app constants
const { DB, PORT } = require("./config");


const startApp = async () => {
    try {
      // Connection With DB
      await connect(DB, {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
      });
  
      success({
        message: `Successfully connected with the Database \n${DB}`,
        badge: true
      });
  
      // Start Listenting for the server on PORT
      app.listen(PORT, () =>
        success({ message: `Server started on PORT ${PORT}`, badge: true })
      );
    } catch (err) {
      error({
        message: `Unable to connect with Database \n${err}`,
        badge: true
      });
      startApp();
    }
  };
  
  startApp();