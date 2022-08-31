import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productsRoutes from './routes/index.routes.js'

const app = express()
dotenv.config();
app.use(cors())


app.use(productsRoutes);


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Aplicación corriendo en: http://localhost:${PORT}`)
})
