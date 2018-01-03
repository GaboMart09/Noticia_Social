var mysql = require('mysql');
var config = require('.././database/database.js');
const fileUpload = require('express-fileupload');

module.exports = {
    guardarPublicacion: function (req, res, next) {

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        if (!req.files)
            return res.status(400).send('No files were uploaded.');

        let sampleFile = req.files.file;
        var NombreArchivo = req.files.file.name;
        var mail_usu = req.body.mail_usu;
        var descripcion_pub = req.body.descripcion_pub;

        sampleFile.mv('imagenes/' + NombreArchivo, function (err) {

            if (err) {
                return res.status(500).send(err);
            } else {
                var db = mysql.createConnection(config);
                db.connect();
                db.query("SELECT GestionPublicacion('1', null, 'imagenes/" + NombreArchivo + "', '" + mail_usu + "', '" + descripcion_pub + "') as msm", function (err, rows, fields) {
                    if (err) {
                        console.log(err);
                        db.end();
                    } else {
                        res.send(rows);
                        db.end();
                    }
                });
            }
        });

    },

    buscarPublicacion: function (req, res, next) {

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        var id_usuario = req.query.id_usuario;

        var db = mysql.createConnection(config);
        db.connect();

        db.query("SELECT * FROM _publicacion WHERE idUsuario = '" + id_usuario + "'", function (err, rows, fields) {
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
//ionic cordova run android
//ionic cordova run android --livereload