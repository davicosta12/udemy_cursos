var ruas = [
    { nome:'Rua 1', tamanho: 2500 },
    { nome:'Rua 2', tamanho: 3400 },
    { nome:'Rua 3', tamanho: 1400 }
  ];
  
  function calculaDistancia(ruas) {
      var iterador = ruas[Symbol.iterator]();
      var proximo = iterador.next();
      var somaDistancia = 0;
      console.log(proximo)
      do {
          somaDistancia += proximo.value.tamanho;
          proximo = iterador.next();
      } while(!proximo.done);
      return somaDistancia;
  }
  
  calculaDistancia(ruas);