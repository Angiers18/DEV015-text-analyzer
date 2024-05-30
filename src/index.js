import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

console.log("Holiis");

const textarea = document.querySelector("textarea");
const button = document.getElementById("reset-button");


   //                                                      addEventListener del botón 
    function borrar() {
      textarea.value = ""; 
  
    }
    button.addEventListener("click", borrar);

    //                                                      addEventListener del textarea 
function escribir(){

  let text = textarea.value

  ////                                                     Escribe en el li (desde el evento)

  document.querySelector("li[data-testid='character-count']").textContent = "Caracteres: " + analyzer.getCharacterCount(text);
  document.querySelector("li[data-testid='character-no-spaces-count']").textContent = "Caracteres Sin Espacios: " + analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector("li[data-testid='word-count']").textContent = "Palabras: " + analyzer.getWordCount(text);
  document.querySelector("li[data-testid='number-count']").textContent = "Números: " + analyzer.getNumberCount(text);
  document.querySelector("li[data-testid='number-sum']").textContent = "Suma de Números: " + analyzer.getNumberSum(text);
  document.querySelector("li[data-testid='word-length-average']").textContent = "Promedio de Longitud: " + analyzer.getAverageWordLength(text);

}
textarea.addEventListener("input",escribir);



