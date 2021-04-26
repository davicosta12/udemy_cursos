function simulaPromise( sucesso = true, tempo ) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(sucesso) resolve('ok');
            else reject('not ok');
        }, tempo)
    });
promise
    .then((resposta) => console.log(resposta))
    .catch((resposta) => console.log(resposta));
}

simulaPromise(true, 2000); // ok
simulaPromise(false, 1000); // not ok