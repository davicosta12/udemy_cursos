var Casa = {
    metrosQuadrados: 4000,
    altura: 3000,
    nQuartos: 4,
    nBanheiros: 2
  
    //...
  }
  
  
  for(var atributo in Casa) {
      console.log(atributo);
      console.log(atributo + ':' + Casa[atributo]);
  }