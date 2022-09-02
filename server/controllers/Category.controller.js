import  {pool}  from '../db/db.js'


export const getCategory = async(req, res) => {
    try {
        const [ rows ] = await pool.query('SELECT * FROM category');

        return res.json(rows)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getCategoryById = async(req, res) => {
    try {
        const { id } = req.params;
        
        const [ rows ] = await pool.query(`SELECT * FROM product WHERE category=${id}`);
        
        return res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
