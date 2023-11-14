"use strict";
//funcion para importar el header
async function fetchHeader() {
  const response = await fetch("./template/encabezado.html"); //direccion de encabezado.html a constante
  const headerContent = await response.text(); //contenido de de response en header content
  const headerElement = document.createElement("header"); //creo elemento header
  headerElement.innerHTML = headerContent; //introduzco content en header
  document.body.prepend(headerElement); //se lo envio al body
}




//funcion para imprimir el footer
async function fetchFooter() {
  const response = await fetch("./template/footer.html"); //direccion de footer.html a constante
  const footerContent = await response.text(); //contenido de de response en foter content
  const footerElement = document.createElement("footer"); //creo elemento footer
  footerElement.innerHTML = footerContent; //introduzco content en footer
  document.body.append(footerElement); //se lo envio al body
}

function b1() {
  const input = document.getElementById("input").value;
  switch (input.toUpperCase().trim()) {
    case "BILL GATES":
      window.location.assign("bill-gates.html");
      break;
    case "STEVE JOBS":
      window.location.assign("steve-jobs.html");
      break;
    case "MARK ZUCKERBERG":
      window.location.assign("mark.html");
      break;
    case "ADA LOVELACE":
      window.location.assign("https://es.wikipedia.org/wiki/Ada_Lovelace");
      break;
    default:
      alert("no a introducido un dato valido");
  }
}
function cargarTexto(){
  //instancia
  var xhr = new XMLHttpRequest();
  //ENLACE TXT
  xhr.open('GET', 'bbdd/bill-1.txt', true);
  //manejo de la carga
  xhr.onload = function() {
      if(this.status == 200){
         var contenido = xhr.responseText;
        var contenidoDiv = document.getElementById("contenido");
        contenidoDiv.textContent =contenido;
      }
};
//enviar solicitut
xhr.send();
}



//segundo texto de bill gates
function cargarTexto1(){
  //instancia
  var xhr = new XMLHttpRequest();
  //ENLACE TXT
  xhr.open('GET', 'bbdd/bill.txt', true);
  //manejo de la carga
  xhr.onload = function() {
      if(this.status == 200){
         var contenido = xhr.responseText;
        var contenidoDiv = document.getElementById("contenido1");
        contenidoDiv.textContent =contenido;
      }
};
//enviar solicitut
xhr.send();
}



//steve jobs
function cargarTexto2(){
  //instancia
  var xhr = new XMLHttpRequest();
  //ENLACE TXT
  xhr.open('GET', 'bbdd/steve-jobs.txt', true);
  //manejo de la carga
  xhr.onload = function() {
      if(this.status == 200){
         var contenido = xhr.responseText;
        var contenidoDiv = document.getElementById("contenido2");
        contenidoDiv.textContent =contenido;
      }
};
//enviar solicitut
xhr.send();
}


//steve jobs texto2
function cargarTexto3(){
  //instancia
  var xhr = new XMLHttpRequest();
  //ENLACE TXT
  xhr.open('GET', 'bbdd/steve-jobs1.txt', true);
  //manejo de la carga
  xhr.onload = function() {
      if(this.status == 200){
         var contenido = xhr.responseText;
        var contenidoDiv = document.getElementById("contenido4");
        contenidoDiv.textContent =contenido;
      }
};
//enviar solicitut
xhr.send();
}


//mark texto 
function cargarTexto4(){
  //instancia
  var xhr = new XMLHttpRequest();
  //ENLACE TXT
  xhr.open('GET', 'bbdd/mark.txt', true);
  //manejo de la carga
  xhr.onload = function() {
      if(this.status == 200){
         var contenido = xhr.responseText;
        var contenidoDiv = document.getElementById("contenido3");
        contenidoDiv.textContent =contenido;
      }
};
//enviar solicitut
xhr.send();
}


//texto 2 mark
function cargarTexto5(){
  //instancia
  var xhr = new XMLHttpRequest();
  //ENLACE TXT
  xhr.open('GET', 'bbdd/mark1.txt', true);
  //manejo de la carga
  xhr.onload = function() {
      if(this.status == 200){
         var contenido = xhr.responseText;
        var contenidoDiv = document.getElementById("contenido5");
        contenidoDiv.textContent =contenido;
      }
};
//enviar solicitut
xhr.send();
}

// Llama a la función asincrónica al cargar
window.addEventListener('load', function() {
  fetchHeader();
  fetchFooter();
//autoejecucion 0
cargarTexto();
//autoejecucion 1
cargarTexto1();
//autoejecucion2
cargarTexto2();
//autoejecucion3
cargarTexto3();
//autoejecucion4
cargarTexto4();
//autoejecucion5
cargarTexto5();
});