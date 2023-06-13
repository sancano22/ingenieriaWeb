const express=require('express');
const mysql=require('mysql');
const app=express();
const bodyParser = require('body-parser');


 //const servidor="127.0.0.1";
 //const puerto=3007;

 const Configuracion={
     server:"127.0.0.1",
     port : 3016
 };

 //configuracion de la conexión
 let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     :  3306,
    password : '',
    database : 'Tiquetes'
  });
  
  connection.connect(function(error:any){
       if(error){
         console.log("no se logro conectar")
         return;
       }
       console.log('conectado a mysql');
       //aqui debemos colocar lo demás 
  });

//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())

  //métodos CRUD=Create ==post, Read==get, Update==put, Delete==delete
 app.get('/',(req:any,res:any)=>{
     res.send("hola mundo");
 });

app.get('/usuarios',bodyParser.json(),(req:any,res:any)=>{
       connection.query("SELECT * FROM usuarios",(req1:any,resultados:any)=>{
           console.log(resultados);
           //res.send(resultados);
           res.status(200).send(resultados);
       });
});

app.get('/usuarios/:id',(req:any,res:any)=>{
    let id=req.params.id;
    console.log(id);
    connection.query("SELECT * FROM usuarios WHERE id=?",id,(req1:any,resultados:any)=>{
       res.status(200).send(resultados);
    });
});

//insertar [nombre ,correoelectronico,clave]
app.post('/crearUsuarios',(req:any,res:any)=>{
     let nombre=req.body.nombre;
     let correoeletronico=req.body.correoelectronico;
     let clave=req.body.clave;

     connection.query("INSERT INTO usuarios(nombre,correo_electronico,contrasena)VALUES('"+nombre+"','"+correoeletronico+"','"+clave+"')",(req1:any,resultados:any)=>{
            
        res.status(201).send(`Usuario creado con el id:${resultados.insertId}`);
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

app.put('/modificarusuario',(req:any,res:any)=>{
    let id=req.body.idUsuario;
    let nombre=req.body.nombre;

    connection.query("UPDATE usuarios SET nombre=? WHERE id=?",[nombre,id],(req1:any,resultados:any)=>{
        res.status(200).send("OK actualizado");
    });
});

app.delete('/borrar/:id',(req:any,res:any)=>{
    let id=req.params.id;
    connection.query('DELETE FROM usuarios WHERE id=?',id,(res1:any,resultados:any)=>{
     res.status(200).send("dato eliminado");
    });
})



 app.listen(Configuracion,()=>{
     console.log(`servidor escuchando ${Configuracion.server}:${Configuracion.port}`);
 });









