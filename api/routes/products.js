const router = require("express").Router();
var multer = require("multer");

// Bring in the User Registration function
const {
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
} = require("../utils/Prod");

// all products Route
router.get("/all-products", async (req, res) => {
  await fetchProducts(req.body, res);
});

// get product by id Route
router.get("/get-product/:id", async (req, res) => {
  await fetchProductById(req, res);
});

// get last inserted product Route
router.get("/last-inserted-product/", async (req, res) => {
  await getLastInsertedProduct(req, res);
});

// count all products Route
router.get("/count-products", async (req, res) => {
  await countProducts(req, res);
});

// count products in stock Route
router.get("/count-products-in-stock", async (req, res) => {
  await countInStockProducts(req, res);
});

// count products low on stock Route
router.get("/count-products-low-on-stock", async (req, res) => {
  await countLowOnStockProducts(req, res);
});

// count products out of stock Route
router.get("/count-products-out-of-stock", async (req, res) => {
  await countOutOfStockProducts(req, res);
});

// products in stock Route
router.get("/products-in-stock", async (req, res) => {
  await fetchInStockProducts(req.body, res);
});

// products out of stock Route
router.get("/products-out-of-stock", async (req, res) => {
  await fetchOutOfStockProducts(req.body, res);
});

// products low on stock Route
router.get("/products-low-on-stock", async (req, res) => {
  await fetchLowStockProducts(req.body, res);
});

// edit product Route
router.put("/edit-product/:id", async (req, res) => {
  await editProduct(req, res);
});

// add product Route
router.post("/add-product", async (req, res) => {
  await addProduct(req, res);
});

// add product picture Route
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "upload");
  },
  filename: (req, file, callback) => {
    callback(
      null,
      `${file.fieldname}-${file.name}` + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage }).single("myImage");
router.post("/add-image", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.file);
    }
    res.send(file);
  });
});
//router.post("/add-image", upload.single("file"), (req, res, next) => {
//uploading images
// const file = req.file;
// console.log(file.filename);
// if (!file) {
//   const error = new Error("No File");
//   error.httpStatusCode = 400;
//   return next(error);
// }

module.exports = router;
