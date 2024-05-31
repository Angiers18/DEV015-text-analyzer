import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea = document.querySelector("textarea");
const button = document.getElementById("reset-button");

//                                                      addEventListener del botón 
function borrar() {
  textarea.value = ""; 
  document.querySelector("li[data-testid='character-count']").textContent = "Caracteres: " + 0;
  document.querySelector("li[data-testid='character-no-spaces-count']").textContent = "Caracteres Sin Espacios: " + 0;
  document.querySelector("li[data-testid='word-count']").textContent = "Palabras: " + 0;
  document.querySelector("li[data-testid='number-count']").textContent = "Números: " + 0;
  document.querySelector("li[data-testid='number-sum']").textContent = "Suma de Números: " + 0;
  document.querySelector("li[data-testid='word-length-average']").textContent = "Promedio de Longitud: " + 0;

  
}
button.addEventListener("click", borrar);

//                                                      addEventListener del textarea 
function escribir(){

  const text = textarea.value

  ////                                                     Escribe en el li (desde el evento)

  document.querySelector("li[data-testid='character-count']").textContent = "Caracteres: " + analyzer.getCharacterCount(text);
  document.querySelector("li[data-testid='character-no-spaces-count']").textContent = "Caracteres Sin Espacios: " + analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector("li[data-testid='word-count']").textContent = "Palabras: " + analyzer.getWordCount(text);
  document.querySelector("li[data-testid='number-count']").textContent = "Números: " + analyzer.getNumberCount(text);
  document.querySelector("li[data-testid='number-sum']").textContent = "Suma de Números: " + analyzer.getNumberSum(text);
  document.querySelector("li[data-testid='word-length-average']").textContent = "Promedio de Longitud: " + analyzer.getAverageWordLength(text);

}
textarea.addEventListener("input",escribir);



