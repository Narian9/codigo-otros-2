var formulario = document.querySelector(".formulario");
var input   = document.querySelector('#input');// se crean id para pode manipular la alerta 
var input2   = document.querySelector('#input2');// se crean id para pode manipular la alerta


formulario.onsubmit = function(e) {

  e.preventDefault();//Se poner metodo completo
  
  var nombre = formulario.elements[0].value;//se cambian nombre de variables y se asocian con el valor de los input
  var edad = formulario.elements[1].value;//se cambian nombre de variables y se asocian con el valor de los input
  var nacionalidad = formulario.elements[2].value;//se cambian nombre de variables y se asocian con el valor de los input
  
  //var nombre = nacionalidad.value
  //var edad = e.value

 // var i = na.selectedIndex
  //var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    
    input.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    input2.classList.add("error")
    
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}
/*****CÓDIGO REPETIDO******/
// //var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  //declaracion de variablre primero
var lista = document.getElementById("lista-de-invitados");
var elementoLista = document.createElement("li");
/*Información que no se usa */

// var spanNombre = document.createElement("span");
// var inputNombre = document.createElement("input");
// var espacio = document.createElement("br");

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

elementoLista.classList.add("elemento-lista")

lista.appendChild(elementoLista)

// spanNombre.textContent = "Nombre: "
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre  = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio     = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);
var botonBorrar         = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id          = "boton-borrar";
var corteLinea          = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);



 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}