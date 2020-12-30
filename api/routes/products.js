const router = require("express").Router();
// Bring in the User Registration function
const {
  fetchProducts,
  fetchInStockProducts,
  fetchOutOfStockProducts,
  fetchLowStockProducts,
  editProduct,
  addProduct,
} = require("../utils/Prod");

// all products Route
router.get("/all-products", async (req, res) => {
  await fetchProducts(req.body, res);
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
  await editProduct(req.body, res);
});

// add product Route
router.post("/add-product", async (req, res) => {
  await addProduct(req.body, res);
});

module.exports = router;
