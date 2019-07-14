import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.NODE_ENV === "test" ? process.env.TS_DATABASE_URL : process.env.DATABASE_URL,
});

const executeQuery = async (text, params = []) => {
    const result = await pool.query(text, params);
    return result.rows || result;
};

export default executeQuery;