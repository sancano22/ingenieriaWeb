const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors=require("cors");

// create application/json parser
var jsonParser = bodyParser.json()

app.use(cors());
app.options('*', cors());  // enable pre-flight
app.use(jsonParser)


const configuracion={
    hostname: "127.0.0.1",
    port: 3000,
}
//CRUD: Create (post), Read (get), Update (put, path), Delete (delete)

app.post('/',(req:any, res:any) => {
    let usuario=req.body.usuario;
    let clave=req.body.clave;
    console.log(usuario);

    res.status(200).send(`{"usuario":"${usuario}","clave":"${clave}"}`);
  }); 

  
app.listen(configuracion.port, () => {
  console.log(`Servidor conectado ${configuracion.port}`)
})