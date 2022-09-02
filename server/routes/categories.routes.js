import { Router } from 'express';
import { getCategory, getCategoryById} from '../controllers/Category.controller.js';

const router = Router();

router.get('/category', getCategory);
router.get('/category/:id', getCategoryById)

export default router;