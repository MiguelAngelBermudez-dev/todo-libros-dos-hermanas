"use strict";
//funcion para importar el header
async function fetchHeader() {
  const response = await fetch("./template/encabezado.html"); //direccion de encabezado.html a constante
  const headerContent = await response.text(); //contenido de de response en header content
  const headerElement = document.createElement("header"); //creo elemento header
  headerElement.innerHTML = headerContent; //introduzco content en header
  document.body.prepend(headerElement); //se lo envio al body
}

// Llama a la función asincrónica
fetchHeader();
//funcion para imprimir el footer
async function fetchFooter() {
  const response = await fetch("./template/footer.html"); //direccion de footer.html a constante
  const footerContent = await response.text(); //contenido de de response en foter content
  const footerElement = document.createElement("footer"); //creo elemento footer
  footerElement.innerHTML = footerContent; //introduzco content en footer
  document.body.append(footerElement); //se lo envio al body
}
fetchFooter();
function b1() {
  const input = document.getElementById("input").value;
  switch (input.toUpperCase().trim()) {
    case "BILL GATES":
      window.location.assign("https://es.wikipedia.org/wiki/Bill_Gates");
      break;
    case "STEVE JOBS":
      window.location.assign("https://es.wikipedia.org/wiki/Steve_Jobs");
      break;
    case "MARK ZUCKERBERG":
      window.location.assign("https://es.wikipedia.org/wiki/Mark_Zuckerberg");
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
//autoejecucion
cargarTexto();
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
//autoejecucion
cargarTexto1();
