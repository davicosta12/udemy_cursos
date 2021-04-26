/*
var dimensoes = function(comprimento, alturaInicial) {
  var altura = alturaInicial * 9 /16;
  return { comprimento : comprimento, altura : altura };
}

console.log(dimensoes(10,10)); // { comprimento: 10, altura: 5.625 }
*/

var dimensoes = (comprimento, alturaInicial) => {
  
    return { 
        comprimento, 
        altura: alturaInicial * 9 /16 };
  }
  
  console.log(dimensoes(10,10)); // { comprimento: 10, altura: 5.625 }