import { pool } from '../db/db.js'

export const getProducts = async(req, res) => {
    try {
        const [ rows ] = await pool.query('SELECT * FROM product');

        res.json(rows)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getProductsByCategory = async(req, res) => {
    try {
        const { category } = req.body;
        console.log(category)
        const [ rows ] = await pool.query(`SELECT * FROM product WHERE category=${category}`);

        res.json(rows);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getCategoryById = async(req, res) => {
    try {
        const { id } = req.params;
        const [ rows ] = await pool.query(`SELECT * FROM product WHERE category=${id}`);
        res.json(rows);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//!Envío el producto basado en la id de categoría recibida
export const getProductsById = async(req, res) => {
    try {
        const { id } = req.body;

        console.log("id de la categoria que solicitaron del front: ", id);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getCategory = async(req, res) => {
    try {
        const [ rows ] = await pool.query('SELECT * FROM category');

        res.json(rows)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



//todo: 1) Desde el front, solicitar el valor de la categoria mediante la ID.
//TODO: 2) en el backend, recibo esa id y mando todos los productos asociados a esa id 