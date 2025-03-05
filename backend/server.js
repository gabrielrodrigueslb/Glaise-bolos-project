const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/temas', (req, res) => {
    db.query('SELECT * FROM temas', (err, results) => {
    if(err){
        res.status(500).json({error: err.message});
        return;
    }
    res.json(results)
});
});

app.get('/bolos/:tema_id', (req, res) => {
    const {tema_id} = req.params;
    db.query('SELECT * FROM bolos WHERE tema_id = ?', [tema_id], (err, results) => {
        if(err){
            res.status(500).json({error: err.message});
            return;
        }
        res.json(results);
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
