/*

function imprimeNomeCompleto(nomeTratado, sobrenome, nomeDoMeio) {
  nomeTratado = nomeTratado || '';
  let sobrenomeTratado = sobrenome || '';
  let nomeDoMeioTratado = nomeDoMeio || '';

  console.log(`${nomeTratado} ${nomeDoMeioTratado} ${sobrenomeTratado}`);
}

imprimeNomeCompleto('João'); // João

*/


function imprimeNomeCompleto(nome = '', sobrenome = '', nomeDoMeio = '') {
    console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
}

imprimeNomeCompleto('João'); // João