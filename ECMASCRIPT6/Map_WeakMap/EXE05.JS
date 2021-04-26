// Exercício 05

var amigos = new Map();
amigos.set('João Silva', {idade:23, sexo:'masculino'});
amigos.set('Luisa Pimenta', {idade:18, sexo:'feminino'});
amigos.set('Julio Marinho', {idade:52, sexo:'masculino'});
amigos.set('Marcela Mel', {idade:27, sexo:'feminino'});

function deletaAmigos(amigos, exAmigos) {
    if(amigos.has(exAmigos)) {
        amigos.delete(exAmigos);
        console.log(exAmigos + " Foi deletado!");
    }
    else console.log(exAmigos + " Não é seu amigo!");
}

deletaAmigos(amigos, 'Marcela Mel');
console.log(amigos);