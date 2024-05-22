import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

console.log("Holiis");


const button = document.getElementById("reset-button");
function borrar() {
  textarea.value = "";
}
button.addEventListener("click",borrar);


///                                                                   IDEA 2
//addEventListener del textarea 
  const textarea = document.querySelector("textarea");
 // //function escribir(){
  //  textarea.value
  //}
  ////textarea.addEventListener("input",escribir);


//                                                                 PRUEBA 2

let m1 = document.getElementsByClassName("metricas")[0];
if (m1) m1.textContent = "Caracteres:" + " ";

let m2 = document.getElementsByClassName("metricas")[1];
if (m2) m2.textContent = "Caracteres Sin Espacios:" + " ";

let m3 = document.getElementsByClassName("metricas")[2];
if (m3) m3.textContent = "Palabras:" + " ";

let m4 = document.getElementsByClassName("metricas")[3];
if (m4) m4.textContent = "Números:" + " ";

let m5 = document.getElementsByClassName("metricas")[4];
if (m5) m5.textContent = "Suma Números:" + " ";

let m6 = document.getElementsByClassName("metricas")[5];
if (m6) m6.textContent = "Promedio Longitud:" + " ";