function contaQuantidadeVogaisNaoAcentuadas(...palavras) {
    console.log(palavras)
    let qtdeDeVogais = 0;
    for(let palavra of palavras) {
        let palavraLowerCase = palavra.toLowerCase();
        const letras = [...palavraLowerCase];
        for(let letra of letras) if("aeiou".indexOf(letra) !== -1) qtdeDeVogais++;
    }
    return qtdeDeVogais; 
}

contaQuantidadeVogaisNaoAcentuadas('abasFdfdsfeWAwfavb', 'aaaa');