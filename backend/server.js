const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const app = express();
const path = require('path')

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

app.use('/uploads/cakes', express.static(path.join(__dirname,'../../.test./uploads/cakes')));


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


app.get('/bolo/:id', (req, res) => {
    const {id} = req.params;
    db.query('SELECT * FROM bolos WHERE id = ?', [id], (err, results) =>{if (err){
        res.status(500).json({error: err.message});
        return;
    }
    if(results.length === 0){
        res.status(404).json({message: 'Bolo não encontrado'});
        return;
    }
    res.json(results[0]);

    });
});



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
