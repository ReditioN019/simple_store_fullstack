import { Router } from 'express';
import { pool } from '../db.js'

const router = Router();

router.get('/products', async(req, res) => {
    const [ rows ] = await pool.query('SELECT * FROM product');
    console.log(rows)
    res.json(rows)
});

export default router;