const usuario = {
    email: 'deadspace24@hotmail.com',
    nome: 'Davi',
    idade: 21,
}

/*

const email = usuario.email;
const nome = usuario.nome;
const idade = usuario.idade;
console.log(`${nome} ${idade} ${email}`);

*/

const {email, nome, idade} = usuario;
console.log(`${nome} ${idade} ${email}`);