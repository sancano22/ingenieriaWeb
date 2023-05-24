const express = require('express');
const mysql=require("mysql");
const app=express();

// create application/json parser
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

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

app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`)
})



var router = express.Router();
app.use("/api",router);

//Tabla Usuarios
router.get("",(req:any, res:any) => {
  connection.query("select * from Usuarios",function(error:any,results:any,fields:any){
      res.send(JSON.stringify(results));
  });
});


//Tabla Usuarios
router.post("",jsonParser,(req:any, res:any) => {
  let usuario=req.body.usuario;
  let clave=req.body.clave;

  
  connection.query("select * from usuarios where Usuario=? and Password=?",[usuario,clave],function(error:any,results:any,fields:any){
      res.send(JSON.stringify(results));
  });
});

//Tabla Usuarios
router.put("",jsonParser,(req:any, res:any) => {
  let usuario=req.body.usuario;
  let clave=req.body.clave;
  let email=req.body.email;
  let activo=req.body.activo;
  let rol=req.body.rol;
  console.log(activo);
  connection.query("insert into Usuarios (Usuario,Email,Password,Activo,Rol)values(?,?,?,?,?)",[usuario,email,clave,activo,rol],function(error:any,results:any,fields:any){
      res.send(JSON.stringify({"id":results.insertId}));
  });
});

router.delete("",jsonParser, (req:any,res:any)=>{
  let usuario=req.body.usuario;
  connection.query("delete from  Usuarios where Usuario=?",[usuario],function(error:any,results:any,fields:any){
    res.send(JSON.stringify({"eliminado":true}));
 });
});


