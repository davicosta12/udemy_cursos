function simulaPromise( sucesso = true ) {
    let promise = new Promise((resolve, reject) => {
        if(sucesso) resolve('ok');
        else reject('not ok');
    });
promise
    .then((resposta) => console.log(resposta))
    .catch((resposta) => console.log(resposta));
}

simulaPromise(); // ok
simulaPromise(true); // ok
simulaPromise(false); // not ok