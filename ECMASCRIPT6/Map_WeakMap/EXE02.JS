// Exercício 02

var caixa = new Map();
caixa.set('Arroz', 7.10);
caixa.set('Feijão', 2.30);
caixa.set('Macarrão', 4.70);
caixa.set('Refrigerante', 3.00);

var fretes = new Map();
fretes.set('São Paulo', 10.10);
fretes.set('Rio de Janeiro', 12.30);
fretes.set('Brasília', 14.70);


function calculaValorTotalDaCompra(produtos, cidade, caixa, fretes)  {
    var precoTotal = 0;
    for(var produto of produtos) {
        precoTotal += caixa.get(produto);
    }
    
    frete = 13.0;
    if(fretes.has(cidade))
        var frete = fretes.get(cidade);
    return (precoTotal + frete);
}

calculaValorTotalDaCompra(['Arroz'], 'São Paulo', caixa, fretes);