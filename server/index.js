import express from 'express';
import dotenv from 'dotenv';
import indexRoutes from './routes/index.routes.js'

const app = express()
dotenv.config();

const products = [
  {
    id: 1,
    name: "name",
    price: '50',
    image: "images/product-1.jpg",
    stock: 50,  
  }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(indexRoutes)


const PORT = process.env.PORT || 4001
app.listen(PORT, () => {
  console.log(`Example app listening on port: http://localhost:${PORT}`)
})
