function tag(string, ...valores) {
    console.log(valores[0]);
    const itensCompra = valores[0].split(',');
    console.log(itensCompra);
    const montaString = itensCompra.map(function(item){
        return `<li>${item}</li>`;
    }).join('');
    return `<ul>${montaString}</ul>`;
}

const compras = 'leite,feijão,arroz,mandioca';
var elemento = tag`${compras}`;

console.log(elemento)
// <ul><li>leite<li><li>feijão<li><li>arroz<li><li>mandioca<li></ul>