// Exercício 01

var produtos = new Map();
produtos.set('Arroz', 7.10);
produtos.set('Feijão', 2.30);
produtos.set('Macarrão', 4.70);
produtos.set('Refrigerante', 3.00);

console.log(produtos)

function possuiProduto(produtos,produtoDesejado) {
    var tem = produtos.has(produtoDesejado);
    return tem;
}

console.log(possuiProduto(produtos,'dadawdad'));