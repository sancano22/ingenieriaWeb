const express = require('express');
const mysql=require("mysql");
const app=express();

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

//cors
const cors=require('cors');
app.use(cors());

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port:  3306,
    database : 'Tienda'
  });

  connection.connect(function(err:any) {
    if (err) {
      console.error('Error conectando a la DB ' + err.stack);
      return;
    }
    console.log('Conexión establecida' + connection.threadId);
  });

//creamos servidor
const configuracion={
    hostname: "127.0.0.1",
    port: 3000,
}

app.post("",jsonParser,(req:any, res:any) => {
    let email=req.body.email;
    let clave=req.body.clave;
    console.log(email);
    connection.query("select * from usuarios where Email=? and Password=?",[email,clave],function(error:any,results:any,fields:any){
      res.send(JSON.stringify({"mensaje":true,"resultado":results}));
    });
  });


app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`)
})