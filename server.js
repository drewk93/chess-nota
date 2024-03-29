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

// app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
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


app.get('/games/:game_id', async (req, res, next) => {
    const game_id = parseInt(req.params.game_id);
    try {
        const result = await pool.query('SELECT * FROM games WHERE game_id = $1', [game_id]);
        if(result.rows.length === 0){
            return res.status(404).send('Unable to locate resource.')
         } else {
             res.status(200).json(result.rows)
         }
    }catch(error){
        res.status(404).send('Resource not found')
        next(error);
    }
})

app.post('/games', async (req, res, next) => {
    const { date, pgn, fen, winner } = req.body;
    try {
        const result = await pool.query('INSERT INTO games (date, pgn, fen, winner) VALUES ($1, $2, $3, $4) RETURNING *', 
        [ date, pgn, fen, winner])
        res.status(201).json(result.rows);
    }catch(error){
        res.status(404).send('Resource Not Found')
        next(error)
    }
})

app.patch('/games/:game_id', async (req, res, next) => {
    const game_id = parseInt(req.params.game_id);
    const { date, pgn, fen, winner } = req.body;
    
    try {
        const game = await pool.query('SELECT * FROM games WHERE game_id = $1', [game_id]);
        
        if (game.rows.length === 0) {
            return res.status(404).send('Unable to locate resource.');
        }
        
        const result = await pool.query('UPDATE games SET date = $1, pgn = $2, fen = $3, winner = $4 WHERE game_id = $5 RETURNING *',
            [date, pgn, fen, winner, game_id]);
        
        res.status(200).json(result.rows); // Assuming successful update, sending updated data
    } catch (error) {
        res.status(500).send('Error updating resource.');
        next(error);
    }
});

app.delete('/games/:game_id', async (req, res, next) => {
    const game_id = parseInt(req.params.game_id);
    try {
        const result = await pool.query('DELETE FROM games WHERE game_id = $1 RETURNING *', [game_id]);
        if (result.rows.length === 0){
            res.status(404).send('Unable to locate resource.')
        } else{
            res.status(200).json(result.rows)
        }
    }catch(error){
        next(error)
    }
})


app.use((error, rew, res, next) => {
    res.type('text/plain');
    res.status(error.status || 500).json({error: error.message})
});

const PORT = process.env.PORT || 10000
app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`)
})