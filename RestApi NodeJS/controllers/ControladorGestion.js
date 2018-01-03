var mysql = require('mysql');
var config = require('.././database/database.js');

module.exports = {

    buscarGenero: function (req, res, next) {

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        var db = mysql.createConnection(config);
        db.connect();

        db.query("SELECT genero.nombre AS 'text', genero.nombre AS 'value' FROM genero", function (err, rows, fields) {
            if (err) {
                console.log(err);
                db.end();
            } else {
                res.send(rows);
                db.end();
            }
        });

    },

    buscarPais: function (req, res, next) {

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        var db = mysql.createConnection(config);
        db.connect();

        db.query("SELECT pais.nombre AS 'text', pais.nombre AS 'value' FROM pais ORDER BY pais.nombre ASC", function (err, rows, fields) {
            if (err) {
                console.log(err);
                db.end();
            } else {
                res.send(rows);
                db.end();
            }
        });

    },
}