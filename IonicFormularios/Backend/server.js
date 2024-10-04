const express=require("express");
const connection=require("./database");
const bodyparser=require("body-parser");
const cors = require('cors');
const app=express();


app.use(bodyparser.json());
app.use(cors()); // Permitir CORS para aceptar solicitudes de diferentes dominios (React en otro puerto)

app.post('/usuario',(req,res)=>{
  const {email,password}=req.body;
  const query1="INSERT INTO usuario(email,password,activo)VALUES(?,?,1)"
  connection.query(query1,[email,password],(error,resultado)=>{
    if(error){
        console.log("error ocurrio");
        return;
    }
    res.status(201).json({res:201,message:"datos insertados"});
  })
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    const consulta="select * from usuario where email=? and password=? and activo=1"
    connection.query(consulta,[email,password],(error,resultado)=>{
      if(error){
          console.log("error ocurrio");
          return;
      }
      res.status(200).json({res:200,message:"Bienvenido"});
    })
})
  

const datos={
    "server":"localhost",
    "port":3000
}

app.listen(datos,()=>{
    console.log(`conectado al servidor ${datos.server}:${datos.port}`);
})