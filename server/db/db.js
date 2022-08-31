// import { Sequelize } from 'sequelize';

// const host = process.env.DB_HOST;
// const username = process.env.DB_USER;
// const password = process.env.DB_PASSWORD;
// const database = process.env.DB_DATABASE;


// const sequelize = new Sequelize(
//     database, 
//     username,
//     password,
//     {
//         host, 
//         dialect: "mysql" 
//     }
// );

// const dbConnectMySql = async() => {
//     try {
//         await sequelize.authenticate();
//         console.log("MYSQL successful connection")
//     } catch (error) {
//         console.log("Connection Error ", error)
//     }
// };

// modeule.exports = { sequelize, dbConnectMySql }



import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';
config();

export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});


