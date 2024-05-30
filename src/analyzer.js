const analyzer = {  
   
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getWordCount: (text) => {    
    
return text.split(/\s+/).length; // split(/\s+/) Expresión REGEX para separar en palabras 
    

  
  },

 //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCount: (text) => {
  return text.length
  },

  //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCountExcludingSpaces: (text) => {                       
  return text.replace(/\s+/g, '').replace(/[^\w]|_/g, '').length // Reemplaza los espacios y caracteres especiales por vacio(0)
  },

  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getAverageWordLength: (text) => {  
       //Necesito declarar una variable (a) que separe el text en palabras y las cuente
       //Necesito declarar una variable (b) que cuente las letras en cada palabra
       //Necesito un bucle que sume (b) y que el resultado se divida entre (a) CREO
    let palabras = text.split(' ').length;
    let letras = text.split('').length;
    //return parseFloat(letras/palabras).toFixed(2)

    let result = 0
    for (let i = 0; i < letras.length; i++){
      result + parseFloat(letras[i])
    }
    return result.toFixed(2)

  },

//TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (text) => {
    const numeros = text.match(/\d+/g);  
    if (!numeros) {
      return 0; //Filtra para tomar solo los numeros
}
      return numeros.length

},

//TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  getNumberSum: (text) => {
    const numeros = text.match(/\d+(\.\d+)?/g);
    if (!numeros) {
      return 0; //Filtra para tomar solo los numeros 
    }
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++ ){
      resultado += parseFloat(numeros[i]); //El bucle para sumar los numeros que se van añadiendo
}
return resultado.toFixed(2);

  },
  
};

export default analyzer;