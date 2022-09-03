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
    try {
        const payload = req.body.payload.trim();
        const [ rows ] = await pool.query(`
            SELECT * FROM product WHERE name like '%${payload}%'
        `)
        return res.send({payload: rows})
    } catch (error) {
        if(error.errno === 1040){
            throw new Error("Error de conexión con la BD");
        }
        // return res.status(500).json({ message: error.message });
    }
    
}







