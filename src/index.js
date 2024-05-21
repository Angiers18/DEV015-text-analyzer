import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

console.log("Holiis");

///FUNCIONA PERO NO ES UN (addEventListener)
///document.getElementById("reset-button").reset

///FUNCIONA PERO SEGUN YO DA UN ERROR (CONFIRMAR)
const button = document.getElementById("reset-button");
function borrar() {
reset;
}
button.addEventListener("click",borrar);
///                                                                   IDEA 1
///addEventListener del textarea (FALTA TERMINAR - CONTINUAR CUANDO PUEDA PROBARLO)
//const textarea = document.querySelector("textarea");
//function escribir(){
//}
//textarea.addEventListener("keydown",escribir);



///                                                                   IDEA 2
//addEventListener del textarea 
  const textarea = document.querySelector("textarea");
  function escribir(){
  }
  textarea.addEventListener("input",escribir);







//texto para li caracteres (m1 = métrica 1)                       PRUEBA 1
//let m1 = document.getElementsByClassName("m1");
///m1.textContent = "Caracteres:" + "5";

//                                                                 PRUEBA 2

let m1 = document.getElementsByClassName("metricas")[0];
if (m1) m1.textContent = "Caracteres:" + " 255";

let m2 = document.getElementsByClassName("metricas")[1];
if (m2) m2.textContent = "Caracteres Sin Espacios:" + " 156";

let m3 = document.getElementsByClassName("metricas")[2];
if (m3) m3.textContent = "Palabras:" + " 25";

let m4 = document.getElementsByClassName("metricas")[3];
if (m4) m4.textContent = "Números:" + " 9";

let m5 = document.getElementsByClassName("metricas")[4];
if (m5) m5.textContent = "Suma Números:" + " 85";

let m6 = document.getElementsByClassName("metricas")[5];
if (m6) m6.textContent = "Promedio Longitud:" + " 5.23";
















