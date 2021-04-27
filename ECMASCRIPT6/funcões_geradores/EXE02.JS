/*
R: Quando chamamos uma função geradora, 
seu corpo não é executado imediatamente. Em vez disso, 
um objeto iterável é retornado. Esse objeto possui uma função muito útil chamada next. 
Ao utilizar este método next dele, o corpo da função geradora 
é executado até a primeira expressão yield, 
que define o valor que será devolvido no retorno da função.

Logo,

function* testeDeGeradores() {
  console.log('passei aqui!');
  yield 'fim do método';
}

testeDeGeradores().next(); // passei aqui!

*/