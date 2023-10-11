const router = require('express').Router();
const productController = require('../controllers/ProductController');
router.get('/products',productController.getAllProducts);
router.post('/products',productController.addProduct); 
module.exports = router;