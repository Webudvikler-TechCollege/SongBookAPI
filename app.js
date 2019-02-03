const express = require('express'),
      app = express(),
      mysql = require('./config/mysql');


const songRouter = require('./routes/songRoutes');
const port = process.env.PORT || 4000;

app.route('/api/songs')
    .get((req, res) => {
        let sql = 'SELECT * FROM song';
        mysql.query(sql, (err, result, fields) => {
            res.json(result);
        });
    });

app.route('/api/song/:id')
    .get((req, res) => {
        let sql = 'SELECT * FROM song WHERE id = ' + req.params.id;
        mysql.query(sql, (err, result, fields) => {
            res.json(result);
        });
    })
    .post((req, res) => {
        res.json('query' + req.query)
    })
    .put((req, res) => {
        res.json('query' + req.query)
    })
    .patch((req, res) => {
        res.json('query' + req.query)
    })
    .delete((req, res) => {
        res.json('query' + req.query)
    })


app.listen(port, () => {
    console.log('App is running...');
});