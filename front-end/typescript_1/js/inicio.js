"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListaFotos = Array();
ListaFotos = [
    { "id": 1,
        "nombre": "pepito",
        "fecha": "12/02/2021",
        "descripcion": "descripcion",
        "imagen": "1.png",
    },
    { "id": 2,
        "nombre": "pepita",
        "fecha": "12/02/2021",
        "descripcion": "descripcion",
        "imagen": "2.png",
    },
    { "id": 3,
        "nombre": "pepita",
        "fecha": "12/02/2021",
        "descripcion": "descripcion",
        "imagen": "3.png",
    },
];
function Galeria() {
    console.log("galeria");
    var i;
    var Gfotos = document.getElementById("fotos");
    for (i = 0; i < ListaFotos.length; i++) {
        var elemento = document.createElement("li");
        var elemento2 = document.createElement("img");
        var elemento3 = document.createElement("div");
        var elemento4 = document.createElement("span");
        var elemento5 = document.createElement("span");
        elemento2.src = "imgs/" + ListaFotos[i].imagen;
        elemento2.alt = "descripcion " + ListaFotos[i].descripcion;
        elemento4.className = "material-icons red";
        elemento5.id = "fuente";
        Gfotos.appendChild(elemento);
        elemento.appendChild(elemento2);
        elemento.appendChild(elemento3);
        elemento3.appendChild(elemento4).textContent = "favorite";
        elemento3.appendChild(elemento5).textContent = 1;
    }
}
window.addEventListener("load", Galeria);
