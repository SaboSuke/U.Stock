const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const Product = require("../models/Product");
const { SECRET } = require("../config");
const bp = require("body-parser");

/**
 * @DESC To get all products
 */
const fetchProducts = async (req, res) => {
  const prod = await Product.find();
  if (prod) {
    if (prod.length == 0)
      res.status(200).json({
        message: "No Products",
        success: true,
      });
    else {
      res.status(200).json({
        prod,
      });
    }
  } else {
    res.status(400).json({
      message: "couldn't find any product",
      success: false,
    });
  }
};

/**
 * @DESC To get last inserted product
 */
const getLastInsertedProduct = async (req, res) => {
  const prod = await Product.find({}).sort({_id: -1}).limit(1)
  if (prod) {
    if (prod.length == 0)
      res.status(400).json({
        message: "No Products Were Found",
        success: true,
      });
    else {
      res.status(200).send(prod)
    }
  } else {
    res.status(400).json({
      message: "couldn't find any product",
      success: false,
    });
  }
};

/**
 * @DESC To get product by id
 */
const fetchProductById = async (req, res) => {
  const id = req.params.id;
  const prod = await Product.findOne({ _id: id });
  if (prod) {
    if (prod.length == 0)
      res.status(400).json({
        message: "No Products",
        success: true,
      });
    else {
      res.status(200).send(prod);
    }
  } else {
    res.status(400).json({
      message: "couldn't find any product",
      success: false,
    });
  }
};

/**
 * @DESC To get all products in stock
 */
const fetchInStockProducts = async (req, res) => {
  const prod = await Product.find({ status: "In Stock" });
  if (prod) {
    if (prod.length == 0)
      res.status(200).json({
        message: "No Products In Stock",
        success: true,
      });
    else {
      res.status(200).json({
        prod,
        success: true,
      });
    }
  } else {
    res.status(400).json({
      message: "couldn't find any product in stock ",
      success: false,
    });
  }
};

/**
 * @DESC To get all products out of stock
 */
const fetchOutOfStockProducts = async (req, res) => {
  const prod = await Product.find({ status: "Out Of Stock" });
  if (prod) {
    if (prod.length == 0)
      res.status(200).json({
        message: "No Products Out Of Stock",
        success: true,
      });
    else {
      res.status(200).json({
        prod,
        success: true,
      });
    }
  } else {
    res.status(400).json({
      message: "couldn't find any product out of stock ",
      success: false,
    });
  }
};

/**
 * @DESC To get all products low on stock
 */
const fetchLowStockProducts = async (req, res) => {
  const prod = await Product.find({ status: "Low On Stock" });
  if (prod) {
    if (prod.length == 0)
    res.status(200).json({
      message: "No Products Low On Stock",
      success: true,
    });
    else {
      res.status(200).json({
        prod,
        success: true,
      });
    }
  } else {
    res.status(400).json({
      message: "couldn't find any product low on stock ",
      success: false,
    });
  }
};

/**
 * @DESC To count all products
 */
const countProducts = async (req, res) => {
  const prod = await Product.find().countDocuments((err, result)=>{
    if (err) 
      return  res.send("error trying to count all products");
    if(result)
      response =  {
        status: 'success',
        data: result
      }
    else
      response = {
        status: 'fail',
        data: []
      }
    return response;
  });
  if (prod) {
    if (prod.length == 0)
      res.status(200).json({
        message: "No Products",
        success: true,
      });
    else {
      res.status(200).json({
        count: prod,
      });
    }
  } else {
    res.status(400).json({
      message: "couldn't find any product ",
      success: false,
    });
  }
};

/**
 * @DESC To count all products in stock
 */
const countInStockProducts = async (req, res) => {
  const prod = await Product.find({ status: "In Stock" }).countDocuments((err, result)=>{
    if (err) 
      return  res.send("error trying to count products in stock");
    if(result)
      response =  {
        status: 'success',
        data: result
      }
    else
      response = {
        status: 'fail',
        data: []
      }
    return response;
  });
  if (prod) {
    if (prod.length == 0)
      res.status(200).json({
        message: "No Products in Stock",
        success: true,
      });
    else {
      res.status(200).json({
        count: prod,
      });
    }
  } else {
    res.status(400).json({
      message: "couldn't find any product in stock ",
      success: false,
    });
  }
};

/**
 * @DESC To count all products low on stock
 */
const countLowOnStockProducts = async (req, res) => {
  const prod = await Product.find({ status: "Low On Stock" }).countDocuments((err, result)=>{
    if (err) 
      return  res.send("error trying to count products low on stock");
    if(result)
      response =  {
        status: 'success',
        data: result
      }
    else
      response = {
        status: 'fail',
        data: []
      }
    return response;
  });
  if (prod) {
    if (prod.length == 0)
      res.status(200).json({
        message: "No Products Low On Stock",
        success: true,
      });
    else {
      res.status(200).json({
        count: prod,
      });
    }
  } else {
    res.status(400).json({
      message: "couldn't find any product low on  stock ",
      success: false,
    });
  }
};

/**
 * @DESC To count all products out of stock
 */
const countOutOfStockProducts = async (req, res) => {
  const prod = await Product.find({ status: "Out Of Stock" }).countDocuments((err, result)=>{
    if (err) 
      return  res.send("error trying to count products out of stock");
    if(result)
      response =  {
        status: 'success',
        data: result
      }
    else
      response = {
        status: 'fail',
        data: []
      }
    return response;
  });
  if (prod) {
    if (prod.length == 0)
      res.status(200).json({
        message: "No Products Out Of Stock",
        success: true,
      });
    else {
      res.status(200).json({
        count: prod,
      });
    }
  } else {
    res.status(400).json({
      message: "couldn't find any product out of stock ",
      success: false,
    });
  }
};


/**
 * @DESC To edit a product
 */
const editProduct = async (req, res) => {
  const id = req.params.id;

  //update product
  const prod = await Product.findOne({ _id: id }, (err, foundObject) => {
    if (err) {
      res.status(500).json({
        message: "Error, check editProduct",
        success: false,
      });
    } else {
      if (!foundObject) {
        res.status(404).json({
          message: "Error, product id not found",
          success: false,
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
              success: false,
            });
          } else {
            res.status(201).json({
              message: "Product info has been updated successfully!",
              success: true,
            });
          }
        });
      }
    }
  });
};

/**
 * @DESC To add a product
 */
const addProduct = async (req, res) => {
  const prod = new Product({
    name: req.body.name,
    code: req.body.code,
    quantity: req.body.quantity,
    price: req.body.price,
    description: req.body.description,
    images: req.body.images,
    status: req.body.status,
    internal_information: req.body.internal_information,
  });

  await prod.save();
  return res.status(201).json({
    message: "Product has been added.",
    success: true,
  });
};

module.exports = {
  fetchProducts,
  fetchInStockProducts,
  fetchOutOfStockProducts,
  fetchLowStockProducts,
  editProduct,
  addProduct,
  fetchProductById,
  countInStockProducts,
  countLowOnStockProducts,
  countOutOfStockProducts,
  countProducts,
  getLastInsertedProduct,
};
