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

  let text = textarea.value

  ////                                                     Escribe en el li (desde el evento)

  if (m1) m1.textContent = "Caracteres: " + analyzer.getCharacterCount(text);
  if (m2) m2.textContent = "Caracteres Sin Espacios: " + analyzer.getCharacterCountExcludingSpaces(text);
  if (m3) m3.textContent = "Palabras: " + analyzer.getWordCount(text);
  if (m4) m4.textContent = "Números: " + " ";
  if (m5) m5.textContent = "Suma de Números: " + " ";
  if (m6) m6.textContent = "Promedio de Longitud: " + " ";
}
textarea.addEventListener("input",escribir);



//                                  Selecciona cada li desde el HTML al DOM

let m1 = document.getElementsByClassName("metricas")[0];

let m2 = document.getElementsByClassName("metricas")[1];

let m3 = document.getElementsByClassName("metricas")[2];

let m4 = document.getElementsByClassName("metricas")[3];

let m5 = document.getElementsByClassName("metricas")[4];

let m6 = document.getElementsByClassName("metricas")[5];

