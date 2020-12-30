"use strict";

var router = require("express").Router(); // Bring in the User Registration function


var _require = require("../utils/Prod"),
    fetchProducts = _require.fetchProducts,
    fetchInStockProducts = _require.fetchInStockProducts,
    fetchOutOfStockProducts = _require.fetchOutOfStockProducts,
    fetchLowStockProducts = _require.fetchLowStockProducts,
    editProduct = _require.editProduct,
    addProduct = _require.addProduct; // all products Route


router.get("/all-products", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetchProducts(req.body, res));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}); // products in stock Route

router.get("/products-in-stock", function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchInStockProducts(req.body, res));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // products out of stock Route

router.get("/products-out-of-stock", function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetchOutOfStockProducts(req.body, res));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // products low on stock Route

router.get("/products-low-on-stock", function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(fetchLowStockProducts(req.body, res));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // edit product Route

router.put("/edit-product/:id", function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(editProduct(req.body, res));

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  });
}); // add product Route

router.post("/add-product", function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(addProduct(req.body, res));

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  });
});
module.exports = router;