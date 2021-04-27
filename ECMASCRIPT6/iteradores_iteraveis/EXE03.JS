var string = ['D', 'A', 'V', 'I', 'S', 'I', 'L', 'V', 'A', 'C', 'O', 'S', 'T', 'A'];

function soletraPalabra(string) {
    var iterador = string[Symbol.iterator]();
    var proximo = iterador.next();
    do {
        console.log(proximo.value);
        proximo = iterador.next();
    } while(!proximo.done);
    
}

soletraPalabra(string);