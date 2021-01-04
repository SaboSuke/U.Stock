"use strict";

var router = require("express").Router();

var multer = require("multer"); // Bring in the User Registration function


var _require = require("../utils/Prod"),
    fetchProducts = _require.fetchProducts,
    fetchInStockProducts = _require.fetchInStockProducts,
    fetchOutOfStockProducts = _require.fetchOutOfStockProducts,
    fetchLowStockProducts = _require.fetchLowStockProducts,
    editProduct = _require.editProduct,
    addProduct = _require.addProduct,
    fetchProductById = _require.fetchProductById,
    countInStockProducts = _require.countInStockProducts,
    countLowOnStockProducts = _require.countLowOnStockProducts,
    countOutOfStockProducts = _require.countOutOfStockProducts,
    countProducts = _require.countProducts,
    getLastInsertedProduct = _require.getLastInsertedProduct,
    getLastAddedProduct = _require.getLastAddedProduct; // all products Route


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
}); // get product by id Route

router.get("/get-product/:id", function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchProductById(req, res));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // get last 10 product Route

router.get("/last-added-products/", function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(getLastAddedProduct(req, res));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // get last inserted product Route

router.get("/last-inserted-product/", function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(getLastInsertedProduct(req, res));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // count all products Route

router.get("/count-products", function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(countProducts(req, res));

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  });
}); // count products in stock Route

router.get("/count-products-in-stock", function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(countInStockProducts(req, res));

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  });
}); // count products low on stock Route

router.get("/count-products-low-on-stock", function _callee7(req, res) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(countLowOnStockProducts(req, res));

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  });
}); // count products out of stock Route

router.get("/count-products-out-of-stock", function _callee8(req, res) {
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(countOutOfStockProducts(req, res));

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  });
}); // products in stock Route

router.get("/products-in-stock", function _callee9(req, res) {
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(fetchInStockProducts(req.body, res));

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  });
}); // products out of stock Route

router.get("/products-out-of-stock", function _callee10(req, res) {
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(fetchOutOfStockProducts(req.body, res));

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  });
}); // products low on stock Route

router.get("/products-low-on-stock", function _callee11(req, res) {
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(fetchLowStockProducts(req.body, res));

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  });
}); // edit product Route

router.put("/edit-product/:id", function _callee12(req, res) {
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return regeneratorRuntime.awrap(editProduct(req, res));

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  });
}); // add product Route

router.post("/add-product", function _callee13(req, res) {
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return regeneratorRuntime.awrap(addProduct(req, res));

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  });
}); // add product picture Route

var storage = multer.diskStorage({
  destination: function destination(req, file, callback) {
    callback(null, "upload");
  },
  filename: function filename(req, file, callback) {
    callback(null, "".concat(file.fieldname, "-").concat(file.name) + path.extname(file.originalname));
  }
});
var upload = multer({
  storage: storage
}).single("myImage");
router.post("/add-image", function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log(req.file);
    }

    res.send(file);
  });
}); //router.post("/add-image", upload.single("file"), (req, res, next) => {
//uploading images
// const file = req.file;
// console.log(file.filename);
// if (!file) {
//   const error = new Error("No File");
//   error.httpStatusCode = 400;
//   return next(error);
// }

module.exports = router;