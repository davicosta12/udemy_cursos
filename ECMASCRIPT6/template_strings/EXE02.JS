/* function criaMacaroca(stringList) {
    console.log(stringList);
    const criaString = stringList.map(function(char){
        return `${char}`;
    }).join('');
    return criaString;
}

console.log(criaMacaroca(['a','b','c', 'd'])); 
*/

function criaMacaroca(stringList) {
    console.log(stringList);
    let textoFinal = '';
    for(texto of stringList) {
        textoFinal = `${textoFinal}${texto}`;
    }
    return textoFinal;
}

console.log(criaMacaroca(['a','b','c', 'd']));