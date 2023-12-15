'use strict'

import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';
import { resolveConfig } from 'vite';

// EXPRESS 
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

app.get('/games', async (req, res, next) => {
    
    try {
        const result = await pool.query('SELECT * FROM games');
        res.status(200).json(result.rows)
    }catch(error){
        res.status(404).json(result.rows);
        next(error);
    }
})

app.use((error, rew, res, next) => {
    res.type('text/plain');
    res.status(error.status || 500).json({error: error.message})
});

const PORT = process.env.PORT
app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`)
})