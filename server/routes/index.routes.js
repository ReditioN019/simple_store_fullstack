import { Router } from 'express';
import { getCategory, getCategoryById, getProducts, getProductsByCategory } from '../controllers/products.contoller.js';

const router = Router();

router.get('/products', getProducts);
router.get('/products/:category', getProductsByCategory)



router.get('/category', getCategory);
router.get('/category/:id', getCategoryById)

export default router;