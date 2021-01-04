"use strict";

var bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");

var passport = require("passport");

var Product = require("../models/Product");

var _require = require("../config"),
    SECRET = _require.SECRET;

var bp = require("body-parser");
/**
 * @DESC To get all products
 */


var fetchProducts = function fetchProducts(req, res) {
  var prod;
  return regeneratorRuntime.async(function fetchProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Product.find());

        case 2:
          prod = _context.sent;

          if (prod) {
            if (prod.length == 0) res.status(200).json({
              message: "No Products",
              success: true
            });else {
              res.status(200).json({
                prod: prod
              });
            }
          } else {
            res.status(400).json({
              message: "couldn't find any product",
              success: false
            });
          }

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};
/**
 * @DESC To get last added product
 */


var getLastAddedProduct = function getLastAddedProduct(req, res) {
  var prod;
  return regeneratorRuntime.async(function getLastAddedProduct$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Product.find({}).sort({
            _id: -1
          }).limit(10));

        case 2:
          prod = _context2.sent;

          if (prod) {
            if (prod.length == 0) res.status(400).json({
              message: "No Products Were Found",
              success: true
            });else {
              res.status(200).send(prod);
            }
          } else {
            res.status(400).json({
              message: "couldn't find any product",
              success: false
            });
          }

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};
/**
 * @DESC To get last inserted product
 */


var getLastInsertedProduct = function getLastInsertedProduct(req, res) {
  var prod;
  return regeneratorRuntime.async(function getLastInsertedProduct$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Product.find({}).sort({
            _id: -1
          }).limit(1));

        case 2:
          prod = _context3.sent;

          if (prod) {
            if (prod.length == 0) res.status(400).json({
              message: "No Products Were Found",
              success: true
            });else {
              res.status(200).send(prod);
            }
          } else {
            res.status(400).json({
              message: "couldn't find any product",
              success: false
            });
          }

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};
/**
 * @DESC To get product by id
 */


var fetchProductById = function fetchProductById(req, res) {
  var id, prod;
  return regeneratorRuntime.async(function fetchProductById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Product.findOne({
            _id: id
          }));

        case 3:
          prod = _context4.sent;

          if (prod) {
            if (prod.length == 0) res.status(400).json({
              message: "No Products",
              success: true
            });else {
              res.status(200).send(prod);
            }
          } else {
            res.status(400).json({
              message: "couldn't find any product",
              success: false
            });
          }

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
};
/**
 * @DESC To get all products in stock
 */


var fetchInStockProducts = function fetchInStockProducts(req, res) {
  var prod;
  return regeneratorRuntime.async(function fetchInStockProducts$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Product.find({
            status: "In Stock"
          }));

        case 2:
          prod = _context5.sent;

          if (prod) {
            if (prod.length == 0) res.status(200).json({
              message: "No Products In Stock",
              success: true
            });else {
              res.status(200).json({
                prod: prod,
                success: true
              });
            }
          } else {
            res.status(400).json({
              message: "couldn't find any product in stock ",
              success: false
            });
          }

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
};
/**
 * @DESC To get all products out of stock
 */


var fetchOutOfStockProducts = function fetchOutOfStockProducts(req, res) {
  var prod;
  return regeneratorRuntime.async(function fetchOutOfStockProducts$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(Product.find({
            status: "Out Of Stock"
          }));

        case 2:
          prod = _context6.sent;

          if (prod) {
            if (prod.length == 0) res.status(200).json({
              message: "No Products Out Of Stock",
              success: true
            });else {
              res.status(200).json({
                prod: prod,
                success: true
              });
            }
          } else {
            res.status(400).json({
              message: "couldn't find any product out of stock ",
              success: false
            });
          }

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
};
/**
 * @DESC To get all products low on stock
 */


var fetchLowStockProducts = function fetchLowStockProducts(req, res) {
  var prod;
  return regeneratorRuntime.async(function fetchLowStockProducts$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(Product.find({
            status: "Low On Stock"
          }));

        case 2:
          prod = _context7.sent;

          if (prod) {
            if (prod.length == 0) res.status(200).json({
              message: "No Products Low On Stock",
              success: true
            });else {
              res.status(200).json({
                prod: prod,
                success: true
              });
            }
          } else {
            res.status(400).json({
              message: "couldn't find any product low on stock ",
              success: false
            });
          }

        case 4:
        case "end":
          return _context7.stop();
      }
    }
  });
};
/**
 * @DESC To count all products
 */


var countProducts = function countProducts(req, res) {
  var prod;
  return regeneratorRuntime.async(function countProducts$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(Product.find().countDocuments(function (err, result) {
            if (err) return res.send("error trying to count all products");
            if (result) response = {
              status: 'success',
              data: result
            };else response = {
              status: 'fail',
              data: []
            };
            return response;
          }));

        case 2:
          prod = _context8.sent;

          if (prod) {
            if (prod.length == 0) res.status(200).json({
              message: "No Products",
              success: true
            });else {
              res.status(200).json({
                count: prod
              });
            }
          } else {
            res.status(400).json({
              message: "couldn't find any product ",
              success: false
            });
          }

        case 4:
        case "end":
          return _context8.stop();
      }
    }
  });
};
/**
 * @DESC To count all products in stock
 */


var countInStockProducts = function countInStockProducts(req, res) {
  var prod;
  return regeneratorRuntime.async(function countInStockProducts$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(Product.find({
            status: "In Stock"
          }).countDocuments(function (err, result) {
            if (err) return res.send("error trying to count products in stock");
            if (result) response = {
              status: 'success',
              data: result
            };else response = {
              status: 'fail',
              data: []
            };
            return response;
          }));

        case 2:
          prod = _context9.sent;

          if (prod) {
            if (prod.length == 0) res.status(200).json({
              message: "No Products in Stock",
              success: true
            });else {
              res.status(200).json({
                count: prod
              });
            }
          } else {
            res.status(400).json({
              message: "couldn't find any product in stock ",
              success: false
            });
          }

        case 4:
        case "end":
          return _context9.stop();
      }
    }
  });
};
/**
 * @DESC To count all products low on stock
 */


var countLowOnStockProducts = function countLowOnStockProducts(req, res) {
  var prod;
  return regeneratorRuntime.async(function countLowOnStockProducts$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(Product.find({
            status: "Low On Stock"
          }).countDocuments(function (err, result) {
            if (err) return res.send("error trying to count products low on stock");
            if (result) response = {
              status: 'success',
              data: result
            };else response = {
              status: 'fail',
              data: []
            };
            return response;
          }));

        case 2:
          prod = _context10.sent;

          if (prod) {
            if (prod.length == 0) res.status(200).json({
              message: "No Products Low On Stock",
              success: true
            });else {
              res.status(200).json({
                count: prod
              });
            }
          } else {
            res.status(400).json({
              message: "couldn't find any product low on  stock ",
              success: false
            });
          }

        case 4:
        case "end":
          return _context10.stop();
      }
    }
  });
};
/**
 * @DESC To count all products out of stock
 */


var countOutOfStockProducts = function countOutOfStockProducts(req, res) {
  var prod;
  return regeneratorRuntime.async(function countOutOfStockProducts$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(Product.find({
            status: "Out Of Stock"
          }).countDocuments(function (err, result) {
            if (err) return res.send("error trying to count products out of stock");
            if (result) response = {
              status: 'success',
              data: result
            };else response = {
              status: 'fail',
              data: []
            };
            return response;
          }));

        case 2:
          prod = _context11.sent;

          if (prod) {
            if (prod.length == 0) res.status(200).json({
              message: "No Products Out Of Stock",
              success: true
            });else {
              res.status(200).json({
                count: prod
              });
            }
          } else {
            res.status(400).json({
              message: "couldn't find any product out of stock ",
              success: false
            });
          }

        case 4:
        case "end":
          return _context11.stop();
      }
    }
  });
};
/**
 * @DESC To edit a product
 */


var editProduct = function editProduct(req, res) {
  var id, prod;
  return regeneratorRuntime.async(function editProduct$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          id = req.params.id; //update product

          _context12.next = 3;
          return regeneratorRuntime.awrap(Product.findOne({
            _id: id
          }, function (err, foundObject) {
            if (err) {
              res.status(500).json({
                message: "Error, check editProduct",
                success: false
              });
            } else {
              if (!foundObject) {
                res.status(404).json({
                  message: "Error, product id not found",
                  success: false
                });
              } else {
                if (req.body.name) {
                  foundObject.name = req.body.name;
                }

                if (req.body.code) {
                  foundObject.code = req.body.code;
                }

                if (req.body.quantity) {
                  foundObject.quantity = req.body.quantity;
                }

                if (req.body.price) {
                  foundObject.price = req.body.price;
                }

                if (req.body.description) {
                  foundObject.description = req.body.description;
                }

                if (req.body.images) {
                  foundObject.images = req.body.images;
                }

                if (req.body.info) {
                  foundObject.internal_information = req.body.info;
                }

                if (req.body.status) {
                  foundObject.status = req.body.status;
                }

                foundObject.save(function (err) {
                  if (err) {
                    res.status(500).json({
                      message: "Error, couldn't save product!",
                      success: false
                    });
                  } else {
                    res.status(201).json({
                      message: "Product info has been updated successfully!",
                      success: true
                    });
                  }
                });
              }
            }
          }));

        case 3:
          prod = _context12.sent;

        case 4:
        case "end":
          return _context12.stop();
      }
    }
  });
};
/**
 * @DESC To add a product
 */


var addProduct = function addProduct(req, res) {
  var prod;
  return regeneratorRuntime.async(function addProduct$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          prod = new Product({
            name: req.body.name,
            code: req.body.code,
            quantity: req.body.quantity,
            price: req.body.price,
            description: req.body.description,
            images: req.body.images,
            status: req.body.status,
            internal_information: req.body.info
          });
          _context13.next = 3;
          return regeneratorRuntime.awrap(prod.save());

        case 3:
          return _context13.abrupt("return", res.status(201).json({
            message: "Product has been added.",
            success: true
          }));

        case 4:
        case "end":
          return _context13.stop();
      }
    }
  });
};

module.exports = {
  fetchProducts: fetchProducts,
  fetchInStockProducts: fetchInStockProducts,
  fetchOutOfStockProducts: fetchOutOfStockProducts,
  fetchLowStockProducts: fetchLowStockProducts,
  editProduct: editProduct,
  addProduct: addProduct,
  fetchProductById: fetchProductById,
  countInStockProducts: countInStockProducts,
  countLowOnStockProducts: countLowOnStockProducts,
  countOutOfStockProducts: countOutOfStockProducts,
  countProducts: countProducts,
  getLastInsertedProduct: getLastInsertedProduct,
  getLastAddedProduct: getLastAddedProduct
};