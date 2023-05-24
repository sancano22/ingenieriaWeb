"use strict";
var express = require('express');
var mysql = require("mysql");
var app = express();
// create application/json parser
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'Tienda'
});
connection.connect(function (err) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }
    console.log('Conexión establecida' + connection.threadId);
});
//creamos servidor
var configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://localhost:" + configuracion.port);
});
var router = express.Router();
app.use("/api", router);
//Tabla Usuarios
router.get("", function (req, res) {
    connection.query("select * from Usuarios", function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
});
//Tabla Usuarios
router.post("", jsonParser, function (req, res) {
    var usuario = req.body.usuario;
    var clave = req.body.clave;
    connection.query("select * from usuarios where Usuario=? and Password=?", [usuario, clave], function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
});
//Tabla Usuarios
router.put("", jsonParser, function (req, res) {
    var usuario = req.body.usuario;
    var clave = req.body.clave;
    var email = req.body.email;
    var activo = req.body.activo;
    var rol = req.body.rol;
    console.log(activo);
    connection.query("insert into Usuarios (Usuario,Email,Password,Activo,Rol)values(?,?,?,?,?)", [usuario, email, clave, activo, rol], function (error, results, fields) {
        res.send(JSON.stringify({ "id": results.insertId }));
    });
});
router.delete("", jsonParser, function (req, res) {
    var usuario = req.body.usuario;
    connection.query("delete from  Usuarios where Usuario=?", [usuario], function (error, results, fields) {
        res.send(JSON.stringify({ "eliminado": true }));
    });
});
