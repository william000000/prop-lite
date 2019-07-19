import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,

});


const createTables = async () => {
    const userTable = `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY UNIQUE,
        email TEXT NOT NULL UNIQUE,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        password TEXT NOT NULL,
        phoneNumber TEXT NOT NULL,
        address TEXT,
        createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        isAdmin boolean DEFAULT false
    )`
    const propertiesTable = `
    CREATE TABLE IF NOT EXISTS properties(
        id SERIAL PRIMARY KEY UNIQUE,
        owner TEXT NOT NULL REFERENCES users(email) ON DELETE CASCADE,
        status TEXT NOT NULL DEFAULT 'available',
        price NUMERIC NOT NULL,
        state TEXT NOT NULL,
        city TEXT NOT NULL,
        address TEXT NOT NULL,
        image TEXT,
        type TEXT NOT NULL,
        createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`
    const flagsTable = `
    CREATE TABLE IF NOT EXISTS flags(
        id SERIAL PRIMARY KEY UNIQUE,
        properties_id INTEGER NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
        email TEXT NOT NULL REFERENCES users(email) ON DELETE CASCADE,
        createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        reason TEXT,
        description VARCHAR(50)
    )`

    const dummyData = [
    `INSERT INTO users (email,first_name,last_name,password, phoneNumber, address) VALUES('john.doe@gmail.com','john','doe','$2b$10$Ckxwq0bGQS2ToJOV0hmqNOHaf.OCBYItXKqVPOT2NvnSkvv8AnYg6',1234567890,'kigali')`,
    `INSERT INTO users (email,first_name,last_name,password, phoneNumber, address) VALUES('jokayinamura@gmail.com','jordan','kayinamura','$2b$10$Ckxwq0bGQS2ToJOV0hmqNOHaf.OCBYItXKqVPOT2NvnSkvv8AnYg6',0781289231,'kgl')`,
    
    `INSERT INTO properties (owner,price, state,city,address,type,image) VALUES('john.doe@gmail.com',200,'kgl','gasabo','kinyinya','apartment','https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png')` ,   
    `INSERT INTO properties (owner, price, state,city,address,type,image) VALUES('jokayinamura@gmail.com',100,'kbh','nyanaxa','rqwrfds','house','https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png')`,            
    
    `INSERT INTO flags (properties_id, email,reason, description)VALUES(2,'john.doe@gmail.com','Fraud','Stolen property')`                
    ];

    await pool.query(userTable);
    await pool.query(propertiesTable);
    await pool.query(flagsTable);

    for (const data of dummyData) {
        await pool.query(data);
    }
    pool.end();
};
createTables();
