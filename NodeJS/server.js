const express=require("express");
const connection=require("./db");
const bodyParser=require("body-parser");
const app=express();
const port=3000;

app.use(bodyParser.json());

//metodos
app.get('/usuarios',(req,res)=>{
    const query="select * from usuarios";
    connection.query(query,(error, resultado)=>{
       res.json(resultado);
    });
});


app.listen(port,()=>{
    console.log(`ha creado el servidor corriendo en el puerto ${port}`);
})