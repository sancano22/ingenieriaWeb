"use strict";
var encendida = false;
var num1 = "";
var num2 = "";
var operacion = "";
var resultado = 0;
    
$("button[name='valor']" ).on('click', function () {
    if(encendida == true && operacion == ""){
        num1 += $(this).text();
        parseFloat(num1);
        document.getElementById("numero").innerHTML = num1;
        return num1;
    } else if(encendida == true && operacion != ""){
        num2 += $(this).text();
        parseFloat(num2);
        document.getElementById("numero").innerHTML = num1 + operacion + num2;
        return num2;
    } 
    
});

$("button[name='operacion']" ).on('click', function () {
    if(encendida == true && operacion == ""){
        if(num1 == ""){
            num1 = 0;
        }
        operacion = $(this).text();
        parseFloat(operacion);
        document.getElementById("numero").innerHTML = num1 + operacion;
        return operacion;
    }
});

function suma(num1, num2) {
    resultado = parseFloat(num1) + parseFloat(num2);
    parseFloat(resultado);
    document.getElementById("numero").innerHTML = resultado;
    operacion = "";
}

function resta(num1, num2) {
    resultado = parseFloat(num1) - parseFloat(num2);
    parseFloat(resultado);
    document.getElementById("numero").innerHTML = resultado;
    operacion = "";
}

function multiplicacion(num1, num2) {
    resultado = parseFloat(num1) * parseFloat(num2);
    parseFloat(resultado);
    document.getElementById("numero").innerHTML = resultado;
    operacion = "";
}

function division(num1, num2) {
    resultado =parseFloat(num1) / parseFloat(num2);
    parseFloat(resultado);
    document.getElementById("numero").innerHTML = resultado;
    operacion = "";
}

$("button[name='resultado_operacion']" ).on('click', function () {
    switch (operacion) {
        case "+":
            suma(num1, num2);
            num1 = resultado;
            num2 = "";
            resultado = 0;
            break;
        case "-":
            resta(num1, num2);
            num1 = resultado;
            num2 = "";
            resultado = 0;
            break;
        case "x":
            multiplicacion(num1, num2);
            num1 = resultado;
            num2 = "";
            resultado = 0;
            break;
        case "÷":
            division(num1, num2);
            num1 = resultado;
            num2 = "";
            resultado = 0;
            break;
        default:
            break;
    }
});

$("button[name='encender']" ).on('click', function () {
    document.getElementById("numero").innerHTML = "0";
    encendida = true;
    num1 = "";
    num2 = "";
    operacion = "";
    resultado = "";
});

$("button[name='limpiar']" ).on('click', function () {
    document.getElementById("numero").innerHTML = "0";
    num1 = "";
    num2 = "";
    operacion = "";
    resultado = "";
});

$("button[name='apagar']" ).on('click', function () {
    document.getElementById("numero").innerHTML = "";
    encendida = false;
    num1 = "";
    num2 = "";
    operacion = "";
    resultado = "";
});