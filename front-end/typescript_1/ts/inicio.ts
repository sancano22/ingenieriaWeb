import {Fotos} from './Fotos';

let ListaFotos=Array<Fotos>();

ListaFotos=[
   {"id":1,
   "nombre": "pepito",
   "fecha":"12/02/2021", 
   "descripcion":"descripcion",
   "imagen": "1.png",
   },
   {"id":2,
   "nombre": "pepita",
   "fecha":"12/02/2021", 
   "descripcion":"descripcion",
   "imagen":"2.png",
   },
   {"id":3,
   "nombre": "pepita",
   "fecha":"12/02/2021", 
   "descripcion":"descripcion",
   "imagen":"3.png",
   },
];

function Galeria(){

     console.log("galeria");
    let i:number;
    let Gfotos:any=document.getElementById("fotos");

    for (i=0;i<ListaFotos.length;i++){
        let elemento:any=document.createElement("li");
        let elemento2:any=document.createElement("img");
        let elemento3:any=document.createElement("div");
        let elemento4:any=document.createElement("span");
        let elemento5:any=document.createElement("span");
        elemento2.src="imgs/"+ListaFotos[i].imagen;
	    elemento2.alt="descripcion "+ListaFotos[i].descripcion;
	    elemento4.className="material-icons red";
        elemento5.id="fuente";

        Gfotos.appendChild(elemento);
        elemento.appendChild(elemento2);
        elemento.appendChild(elemento3);
        elemento3.appendChild(elemento4).textContent="favorite";
        elemento3.appendChild(elemento5).textContent=1;
        
    }
}

window.addEventListener("load",Galeria);