let images=["1.jpg","2.jpg","3.jpg"];
let ruta="images";

//JSON productos destacados
let productos=[{
    "id":1,
    "nombre":"producto1",
    "descripcion":"Producto que se describe",
    "imagen":"images/productos/1.png",
    "disponible":true
},
{
    "id":2,
    "nombre":"producto1",
    "descripcion":"producto que se describe",
    "imagen":"images/productos/2.png",
    "disponible":false
}
];


document.addEventListener("DOMContentLoaded", function(){
    //let carusel:any=document.getElementsByClassName("carousel-item");
    let carusel:any=document.getElementById("carusell")

    for(let i=0;i<images.length;i++){
         let clase=document.createElement("div");
         if(i==0)clase.className="carousel-item active";
         else clase.className="carousel-item";
         let elemento=document.createElement("img");
         elemento.src=ruta+"/"+images[i];
         elemento.className="d-block w-100";
         elemento.alt="....";

         carusel.appendChild(clase);
         clase.appendChild(elemento);
    }

    //productos destacados
    let productosdestacados=document.getElementById("productosdestacados") as HTMLElement;
    for(let i=0;i<productos.length;i++){
        let etiqueta=document.createElement("li");
        let boton:string;
        if(productos[i].disponible) boton="<button class=\"btn btn-secondary\">Comprar</button>";
        else boton="";
        etiqueta.innerHTML="<img src=\""+productos[i].imagen+"\"><p>"+productos[i].descripcion+"<br>"+boton+"</p>";
        
        productosdestacados.appendChild(etiqueta);
    }
    
   


});   