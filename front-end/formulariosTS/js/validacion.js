"use strict";
var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (event) {
    var elem = document.getElementsByTagName("li");
    var span1 = document.getElementsByTagName("span");
    for (var j = 0; j < span1.length; j++) {
        span1[j].parentNode.removeChild(span1[j]);
    }
    for (var i = 0; i < formulario.length; i++) {
        var span = document.createElement("span");
        var campo = formulario[i];
        if (campo.type == "text" || campo.type == "email") {
            if (campo.value == "") {
                span.textContent = "Datos requeridos";
                span.classList.add("no-valido");
                elem[i].appendChild(span);
            }
            else {
                span.textContent = "Datos bien";
                span.classList.add("valido");
                elem[i].appendChild(span);
            }
        }
    }
    //validar radio button
    var radio = document.getElementsByName("terminos");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked == true) {
            console.log("este valor es" + radio[i].value);
        }
    }
    event.preventDefault();
});
