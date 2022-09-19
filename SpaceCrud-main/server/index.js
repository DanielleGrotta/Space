const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.listen(port, () => { console.log(`Example app listening on port ${port}!`)});

app.get('/api/spaceships', (req, res) => {
    const spaceShips = [
        {
        spaceship: 'Millennium Falcon',
        name: 'Han Solo',
        rank: 'Captain'
        },
        {
        spaceship: 'X-Wing',
        name: 'Luke Skywalker',
        rank: 'Jedi Knight'
        },
        {
        spaceship: 'TIE Fighter',
        name: 'Darth Vader',
        rank: 'Sith Lord'
        }
    ];
    res.send(spaceShips);
    });

app.get('/api/crew', (req, res) => {
    const crew = [
        {
        name: 'Han Solo',
        duties: 'Pilot'
        },
        {
        name: 'Luke Skywalker',
        duties: 'Jedi'
        },
        {
        name: 'Darth Vader',
        duties: 'Sith'
        }
    ];
    res.send(crew);
    });
    
