import {pool}  from '../db/db.js'


export const getProducts = async(req, res) => {
    try {
        const [ rows ] = await pool.query('SELECT * FROM product');

        return res.json(rows)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const searchProduct = async(req, res) => {
    const payload = req.body.payload.trim();
    const [ rows ] = await pool.query(`
        SELECT * FROM product WHERE name like '%${payload}%'
    `)
    return res.send({payload: rows})
}







