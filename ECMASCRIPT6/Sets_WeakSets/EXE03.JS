/* R: Ao contrário do Set, o WeakMap não é uma estrutura iterável. 
Isso significa que não é possível utilizar o laço de repetição for...of nela, 
por isso dá o erro sempre que executado: TypeError: musicas[Symbol.iterator] is not a function.*/