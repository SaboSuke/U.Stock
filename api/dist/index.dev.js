"use strict";

var cors = require("cors");

var router = require("express").Router();

var exp = require("express");

var bp = require("body-parser");

var passport = require("passport");

var _require = require("mongoose"),
    connect = _require.connect;

var _require2 = require("consola"),
    success = _require2.success,
    error = _require2.error; // Bring in the app constants


var _require3 = require("./config"),
    DB = _require3.DB,
    PORT = _require3.PORT; // Initialize the application


var app = exp(); // Middlewares

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Origin, Authorization, Accept, X-Requested-With");
  next();
}); //app.use(exp.bodyParser());

app.use(bp.json());
app.use(passport.initialize()); //app.use(exp.json());
// app.use(bp.urlencoded({extended : true })); 

require("./middlewares/passport")(passport); // User Router Middleware


app.use("/api/users", require("./routes/users"));
app.use("/api/products", require("./routes/products"));

var startApp = function startApp() {
  return regeneratorRuntime.async(function startApp$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(connect(DB, {
            useFindAndModify: true,
            useUnifiedTopology: true,
            useNewUrlParser: true
          }));

        case 3:
          success({
            message: "Successfully connected with the Database \n".concat(DB),
            badge: true
          }); // Start Listenting for the server on PORT

          app.listen(PORT, function () {
            return success({
              message: "Server started on PORT ".concat(PORT),
              badge: true
            });
          });
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error({
            message: "Unable to connect with Database \n".concat(_context.t0),
            badge: true
          });
          startApp();

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

startApp();