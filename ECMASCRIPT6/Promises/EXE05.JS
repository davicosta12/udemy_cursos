/*
R: O problema é que na execução do segundo then, 
o resultado da variável data será undefined. 
Isso acontece porque o valor da variável data, disponível na primeira chamada, 
não é passada adiante. Para resolver isso, basta fazer a seguinte alteração:
*/

function simulaPromise(sucesso = true) {
    let promise = new Promise((resolve, reject) => {
      if(sucesso) {
        resolve("ok");
      } else {
        reject("not ok");
      }
    });

promise
  .then((data) => {
    console.log(`resultado positivo: ${data}`)
    return data; 
      
  })
  .then((data) => console.log(`resultado positivo 2: ${data}`))
  .catch((data) => console.log(`resultado negativo: ${data}`));
}

simulaPromise(); // ok
simulaPromise(true); // ok
simulaPromise(false); // not ok