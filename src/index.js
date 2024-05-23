import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

console.log("Holiis");

const textarea = document.querySelector("textarea");
const button = document.getElementById("reset-button");


   //                                                      addEventListener del boton 
    function borrar() {
      textarea.value = ""; 
    }
    button.addEventListener("click", borrar);

    //                                                      addEventListener del textarea 
function escribir(){
  let contenido = textarea.value
  console.log(contenido.length)
}
textarea.addEventListener("input",escribir);




//                                                                 Escribe texto dentro del <li>
let m1 = document.getElementsByClassName("metricas")[0];
if (m1) m1.textContent = "Caracteres:" + " ";

let m2 = document.getElementsByClassName("metricas")[1];
if (m2) m2.textContent = "Caracteres Sin Espacios:" + " ";

let m3 = document.getElementsByClassName("metricas")[2];
if (m3) m3.textContent = "Palabras:" +  ""

let m4 = document.getElementsByClassName("metricas")[3];
if (m4) m4.textContent = "Números:" + " ";

let m5 = document.getElementsByClassName("metricas")[4];
if (m5) m5.textContent = "Suma de Números:" + " ";

let m6 = document.getElementsByClassName("metricas")[5];
if (m6) m6.textContent = "Promedio de Longitud:" + " ";
