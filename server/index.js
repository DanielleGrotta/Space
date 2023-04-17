const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.listen(port, () => { console.log(`Example app listening on port ${port}!`)});

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'spacecrud'
});


app.get('/api/spaceships', (req, res) => {
    pool.query('SELECT * FROM leaders', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

app.get('/api/crew', (req, res) => {
    pool.query('SELECT * FROM astronauts', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});
