var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');
//const servidor="127.0.0.1";
//const puerto=3007;
var Configuracion = {
    server: "127.0.0.1",
    port: 3016
};
//configuracion de la conexión
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'Tiquetes'
});
connection.connect(function (error) {
    if (error) {
        console.log("no se logro conectar");
        return;
    }
    console.log('conectado a mysql');
    //aqui debemos colocar lo demás 
});
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())
//métodos CRUD=Create ==post, Read==get, Update==put, Delete==delete
app.get('/', function (req, res) {
    res.send("hola mundo");
});
app.get('/usuarios', bodyParser.json(), function (req, res) {
    connection.query("SELECT * FROM usuarios", function (req1, resultados) {
        console.log(resultados);
        //res.send(resultados);
        res.status(200).send(resultados);
    });
});
app.get('/usuarios/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    connection.query("SELECT * FROM usuarios WHERE id=?", id, function (req1, resultados) {
        res.status(200).send(resultados);
    });
});
//insertar [nombre ,correoelectronico,clave]
app.post('/crearUsuarios', function (req, res) {
    var nombre = req.body.nombre;
    var correoeletronico = req.body.correoelectronico;
    var clave = req.body.clave;
    console.log(nombre);
    connection.query("INSERT INTO usuarios(nombre,correo_electronico,contrasena)VALUES('" + nombre + "','" + correoeletronico + "','" + clave + "')", function (req1, resultados) {
        res.status(201).send("Usuario creado con el id:" + resultados.insertId);
        //console.log(resultados);
    });
});
/*
app.put('/modificarusuario/:idUsuario',(req:any,res:any)=>{
     let id=req.params.idUsuario;
     let nombre=req.body.nombre;
     
     connection.query("UPDATE usuarios SET nombre=? WHERE id=?",[nombre,id],(req1:any,resultados:any)=>{
         res.status(200).send("OK actualizado");
     });
});
*/
app.put('/modificarusuario', function (req, res) {
    var id = req.body.idUsuario;
    var nombre = req.body.nombre;
    connection.query("UPDATE usuarios SET nombre=? WHERE id=?", [nombre, id], function (req1, resultados) {
        res.status(200).send("OK actualizado");
    });
});
app.delete('/borrar/:id', function (req, res) {
    var id = req.params.id;
    connection.query('DELETE FROM usuarios WHERE id=?', id, function (res1, resultados) {
        res.status(200).send("dato eliminado");
    });
});
app.listen(Configuracion, function () {
    console.log("servidor escuchando " + Configuracion.server + ":" + Configuracion.port);
});
