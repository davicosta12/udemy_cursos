const v = 'valor 1';
function funcao(x = v) {
  const v = 'valor 2';
  console.log(x);
}

funcao(); // qual valor será mostrado?

/*
Ao executar esta função, percebemos que o valor atribuído ao padrão é "valor 1" e não "valor 2". Isso aconteceu exatamente por causa do escopo de bloco que vimos no capítulo de const e let. Se removemos a primeira declaração da variável v, somos presenteados com um belo erro: `ReferenceError: v is not defined`
*/