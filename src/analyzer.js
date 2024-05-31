const analyzer = {  
   
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getWordCount: (text) => {    
  // return text.split(/\s+/).length; // split(/\s+/) Expresión REGEX para separar en palabras 
  
    const words = text.split(/\s+/)
    if (text === ''){
      return 0
    }
    else {
      return words.length
    }  
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
    const palabras = text.split(/\s+/).length

    //Necesito declarar una variable que separe el text en palabras
    const letras = text.replace(/\s+/g, '')

    //Necesito declarar una variable resultado
    let resultado = 0 ;

    //Necesito un bucle que sume las letras
    for (let i = 0; i < letras.length; i++){
      resultado += letras[i].length
    }
    // y que el resultado se divida entre palabras
    const longitud = parseFloat(resultado/palabras)

    return parseFloat(longitud.toFixed(2))

  },
  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (text) => {
    const numeros = text.match(/\b(\d+(\.\d+)?([.,])?\b)/g);  
    if (!numeros) {
      return 0; //Filtra para tomar solo los numeros
    }
    return numeros.length
  },
  
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  getNumberSum: (text) => {
    const numeros = text.match(/\b(\d+(\.\d+)?([.,])?\b)/g);
    if (!numeros) {
      return 0; //Filtra para tomar solo los numeros 
    }
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++ ){
      resultado += parseFloat(numeros[i]); //El bucle para sumar los numeros que se van añadiendo
    }
    return parseFloat(resultado.toFixed(2));

  },
  
};

export default analyzer;