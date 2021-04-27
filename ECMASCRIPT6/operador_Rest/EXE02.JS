/* 1 maneira: */

/*

function todosSaoMaioresQue(referencia, ...valores) {
    console.log(valores);
    for(let item of valores) {
        if(item <= referencia) return false;
    }
    return true;
}

console.log(todosSaoMaioresQue(2,3,4,5,6,7));
console.log(todosSaoMaioresQue(5,4,3,2,1));
console.log(todosSaoMaioresQue(1,2));

*/

/* 2 maneira: */

function todosSaoMaioresQue(referencia, ...valores) {
    console.log(valores);
    return valores.every(function(valor){
        console.log(valor)
        return valor >= referencia;
    });
}


console.log(todosSaoMaioresQue(2,3,4,5,6,7));
console.log(todosSaoMaioresQue(5,4,3,2,1));
console.log(todosSaoMaioresQue(1,2));