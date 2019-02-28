const mysql = require('../config/mysql');
const bodyParser = require('body-parser');

module.exports = (app) => {
    //Settings for bodyParser modul
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    //Henter alle sange
    app.get('/api/song/', function(req, res) {
        let sql = 'SELECT * FROM song';
        mysql.query(sql, (err, rows, fields) => {
            res.json(rows);
            /*
            res.render('pages/index', {
                rows
            });
            */
        });
    });

    //Henter alle sange ud fra artist
    app.get('/api/song/artist/:id', (req, res) => {
        let sql = 'SELECT s.*, ar.name AS artist ' + 
                    'FROM song s ' + 
                    'LEFT JOIN song_album_rel x ' + 
                    'ON s.id = x.song_id ' + 
                    'LEFT JOIN album al ' + 
                    'ON x.album_id = al.id ' + 
                    'LEFT JOIN artist ar ' + 
                    'ON al.artist_id = ar.id ' + 
                    'WHERE ar.id = ' + req.params.id;
        console.log(sql);
        mysql.query(sql, (err, rows, fields) => {
            res.json(rows);
        });
    });
    
    //Henter en enkelt sang
    app.get('/api/song/:id', (req, res) => {
        let sql = 'SELECT * FROM song WHERE id = ' + req.params.id;
        mysql.query(sql, (err, result, fields) => {
            res.json(result);
        });
    })
    
    //Tilføjer ny sang
    app.post('/api/song/', (req, res) => {
        res.json(req.query)
    })
    
    //Updater sang
    app.put('/api/song/:id', (req, res) => {
        res.json(req.query)
    })
    
    //Updater del af en sang
    app.patch('/api/song/:id', (req, res) => {
        res.json('query' + req.query)
    })

    //Sletter sang
    app.delete('/api/song/:id', (req, res) => {
        res.json('query' + req.query)
    })
}