/*
const comida = new Comida('Feijão');
class Comida {
  constructor(nome) {
    this.nome = nome;
  }
}

*/

/*
R: No ES5, quando criamos objetos por meio de funções, 
temos o comportamento de hoisting. Isto é, dentro de um escopo, 
as funções que são declaradas são 
imediatamente disponíveis para uso — 
independente de onde as declarações acontecem. Porém, 
declarações de classes não possuem este comportamento. 
A classe só existe quando a execução do código chega ao ponto onde 
a classe é avaliada. Se tentarmos acessar antes, 
tomaremos um ReferenceError. Para que o código funcione, 
basta trocar a ordem das declarações:
*/

class Comida {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  const comida = new Comida('Feijão');