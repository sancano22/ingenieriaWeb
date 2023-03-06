"use strict";
var images = ["1.jpg", "2.jpg", "3.jpg"];
var ruta = "images";
//JSON productos destacados
var productos = [{
        "id": 1,
        "nombre": "producto1",
        "descripcion": "Producto que se describe",
        "imagen": "images/productos/1.png",
        "disponible": true
    },
    {
        "id": 2,
        "nombre": "producto1",
        "descripcion": "producto que se describe",
        "imagen": "images/productos/2.png",
        "disponible": false
    }
];
document.addEventListener("DOMContentLoaded", function () {
    //let carusel:any=document.getElementsByClassName("carousel-item");
    var carusel = document.getElementById("carusell");
    for (var i = 0; i < images.length; i++) {
        var clase = document.createElement("div");
        if (i == 0)
            clase.className = "carousel-item active";
        else
            clase.className = "carousel-item";
        var elemento = document.createElement("img");
        elemento.src = ruta + "/" + images[i];
        elemento.className = "d-block w-100";
        elemento.alt = "....";
        carusel.appendChild(clase);
        clase.appendChild(elemento);
    }
    //productos destacados
    var productosdestacados = document.getElementById("productosdestacados");
    for (var i = 0; i < productos.length; i++) {
        var etiqueta = document.createElement("li");
        var boton = void 0;
        if (productos[i].disponible)
            boton = "<button class=\"btn btn-secondary\">Comprar</button>";
        else
            boton = "";
        etiqueta.innerHTML = "<img src=\"" + productos[i].imagen + "\"><p>" + productos[i].descripcion + "<br>" + boton + "</p>";
        productosdestacados.appendChild(etiqueta);
    }
});
