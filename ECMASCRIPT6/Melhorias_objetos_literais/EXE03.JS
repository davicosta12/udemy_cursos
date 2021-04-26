/*

const pessoa = {
  nome: 'Goku',
  equipe: 'Guerreiro Z'
}

function seApresentar(pessoa) {
  console.log('Oi, eu sou o ' + pessoa.nome + '!');
}

seApresentar(pessoa); // Oi, eu sou o Goku!

*/

const pessoa = {
    nome: 'Goku',
    equipe: 'Guerreiro Z',
    seApresentar() {
        console.log(`Oi, eu sou o ${this.nome} !`);
    }
  }
  
  pessoa.seApresentar(); // Oi, eu sou o Goku!