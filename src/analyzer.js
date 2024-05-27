const analyzer = {  
   
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getWordCount: (text) => { 
  return text.split(/\s+/).length;
  },

 //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCount: (text) => {
  return text.length
  },

  //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCountExcludingSpaces: (text) => {                       
  return text.replace(/\s+/g, '').replace(/[^\w]|_/g, '').length
  },

  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getAverageWordLength: (text) => {  
    
    

    
    
  },

   //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (text) => {

    return text.match(/[0-9]/g).length
  
  },

   //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  getNumberSum: (text) => {
    const numeros = text.match(/[0-9]/g);
    if (!numeros) {
      return 0;
    }
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++ ){
      resultado += parseFloat(numeros[i]);
   }
      return resultado

  },
  
};

export default analyzer;