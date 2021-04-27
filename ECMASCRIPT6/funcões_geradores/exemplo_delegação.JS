const desenvolvimento = {
    gerente: 'Gilberto',
    estagiario: 'Fernanda',
    senior: 'Paulo',
    [Symbol.iterator]: function* () {
        yield this.gerente;
        yield this.estagiario; 
        yield this.senior; 
    }
}

const RH = {
    gerente: 'Gilberto',
    estagiario: 'Fernanda',
    senior: 'Paulo',
    pleno: 'Camila',
    junior: 'Adão',
    [Symbol.iterator]: function* () {
        yield this.gerente;
        yield this.estagiario; 
        yield this.senior; 
        yield this.pleno;
        yield this.junior;
    }
}

const equipe = {
    desenvolvimento,
    RH, 
    [Symbol.iterator]: function* () {
        yield* desenvolvimento;
        yield* RH 
  }
}

for(let integrante of equipe) {
    console.log(integrante);
}

/*
Gilberto
Fernanda
Paulo
Camila
Adão
*/