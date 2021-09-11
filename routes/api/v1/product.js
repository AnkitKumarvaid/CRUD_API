const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const productController=require('../../../controllers/api/v1/product-controller');

router.post(
    '/create',
[
    body("name").not().isEmpty().withMessage("Name is Empty"),
    body("quantity")
        .isFloat ({gt: 0})
        .withMessage("quantity must be greater than 0")
], 
productController.createProduct
);
router.get("/all",productController.getProduct);
module.exports = router;