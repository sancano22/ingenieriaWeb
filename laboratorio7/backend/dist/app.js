"use strict";
var express = require('express');
var mysql = require("mysql");
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//cors
var cors = require('cors');
app.use(cors());
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
app.post("", jsonParser, function (req, res) {
    var email = req.body.email;
    var clave = req.body.clave;
    console.log(email);
    connection.query("select * from usuarios where Email=? and Password=?", [email, clave], function (error, results, fields) {
        res.send(JSON.stringify({ "mensaje": true, "resultado": results }));
    });
});
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://localhost:" + configuracion.port);
});
