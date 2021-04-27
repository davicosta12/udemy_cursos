/*
function calculaPrecoTotal(a, b, c, d, e) {
  let precos = [a,b,c,d,e];
  return precos.reduce(function(total, preco) {
    return total + preco;
  }, 0)
}
calculaPrecoTotal(1,2,3,4,5); // 15
*/

function calculaPrecoTotal(...valores) {
    console.log(valores);
    return valores.reduce(function(total, preco) {
      return total + preco;
    }, 0)
  }
  
  calculaPrecoTotal(1,2,3,4,5); // 15