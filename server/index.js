import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productsRoutes from './routes/products.routes.js'
import categoriesRoutes from './routes/categories.routes.js'

const app = express()
dotenv.config();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(productsRoutes);
app.use(categoriesRoutes);


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Aplicación corriendo en: http://localhost:${PORT}`)
})
