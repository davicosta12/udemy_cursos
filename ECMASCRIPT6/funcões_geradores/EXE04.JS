/*

var pokemons = ['Pikachu', 'Charmander', 'Caterpie'];
for(var index = 0; index < pokemons.length; index++) {
	var pokemon = pokemons[index];
	console.log('Capturou o ' + pokemon + '!');
}

*/

function* Pokemons() {
    yield 'Pikachu';
    yield 'Charmander';
    yield 'Caterpie';
}

const chamalinha = Pokemons();
for(let linha of chamalinha) {
    console.log(linha);
}