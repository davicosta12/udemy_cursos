function numerosELetras(...numeros, ...letras){
    // corpo da função
  }
  
  //Explique o porque este código não funciona.
  
  /*
    R: O operador sempre interpreta as últimas variáveis passadas na função para compactá-las em um único Array. Apesar de a separação parecer fazer sentido para o aluno, não funcionará como esperado. O correto seria fazer algo do gênero:
  
  function numerosELetras(...numerosELetras) {
    // corpo
  }  
  */