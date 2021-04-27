var numbers = [];

function isListaVazia(numbers) {
    var iterador = numbers[Symbol.iterator]();
    var proximo = iterador.next();
    console.log(proximo)
    return proximo.done ? proximo.done : proximo.done
}

isListaVazia(numbers)