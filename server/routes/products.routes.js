import { Router } from 'express';
import {  getProducts, searchProduct } from '../controllers/Product.contoller.js';

const router = Router();

router.route('/products').get(getProducts).post(searchProduct);

export default router;