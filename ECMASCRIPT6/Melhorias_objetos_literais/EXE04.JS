const mapa = new Map();
mapa.set('nome', 'Davi Silva Costa');
mapa.set('idade', 21);
mapa.set('cidade', 'São Paulo');

console.log(mapa);

function criaObjetoComCaracteristicas(caracteristicas) {
    const Objeto_Literal = {};
    
    for(let caracteristica of caracteristicas) {
        Objeto_Literal[caracteristica[0]] = mapa.get(caracteristica[0]);
    }
    return Objeto_Literal;
}

criaObjetoComCaracteristicas(mapa);