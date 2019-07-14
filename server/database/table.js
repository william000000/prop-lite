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
        address TEXT,
        createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        isAdmin boolean DEFAULT false
    )`;
    const propertyTable = `
    CREATE TABLE IF NOT EXISTS properties(
        id SERIAL PRIMARY KEY UNIQUE,
        owner TEXT NOT NULL REFERENCES users(email) ON DELETE CASCADE,
        status TEXT NOT NULL DEFAULT 'available',
        price INTEGER NOT NULL,
        state TEXT NOT NULL,
        city TEXT NOT NULL,
        address TEXT NOT NULL,
        image TEXT
        createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    )`;
    const flagTable = `
    CREATE TABLE IF NOT EXISTS flags(
        id SERIAL PRIMARY KEY UNIQUE,
        car_id INTEGER NOT NULL REFERENCES cars(id) ON DELETE CASCADE,
        email TEXT NOT NULL REFERENCES users(email) ON DELETE CASCADE,
        createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        reason TEXT,
        description VARCHAR(50)
    )`;
    const tokenTable = `
    CREATE TABLE IF NOT EXISTS tokens(
        id SERIAL PRIMARY KEY UNIQUE,
        token TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE REFERENCES users(email) ON DELETE CASCADE,
        createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

};
createTables();
