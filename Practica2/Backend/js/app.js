"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require("cors");
// create application/json parser
var jsonParser = bodyParser.json();
app.use(cors());
app.options('*', cors()); // enable pre-flight
app.use(jsonParser);
var configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
//CRUD: Create (post), Read (get), Update (put, path), Delete (delete)
app.post('/', function (req, res) {
    var usuario = req.body.usuario;
    var clave = req.body.clave;
    console.log(usuario);
    res.status(200).send("{\"usuario\":\"" + usuario + "\",\"clave\":\"" + clave + "\"}");
});
app.listen(configuracion.port, function () {
    console.log("Servidor conectado " + configuracion.port);
});
