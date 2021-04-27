function somaFaturamento(lista) {
    var soma = 0;
    for (var item of lista) {
        soma += item;
    }
    return soma;
}

somaFaturamento([1,2,3,4]);