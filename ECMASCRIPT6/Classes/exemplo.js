class Carro {
    constructor(modelo,chassi,qtdePortas) {
        console.log(this);
        this.modelo = modelo;
        this.chassi = chassi;
        this.qtdPortas = qtdePortas;
    }
   
    andar() {
        console.log('vrum vrum');
    }
}

class Sonix extends Carro {
    constructor(modelo,chassi,qtdePortas) {
        super(modelo,chassi,qtdePortas);
    }
    
    abrirTetoSolar() {
        console.log('abrindo teto solar');
    }
}

const sonix = new Sonix('Sonix', '585498498748', 5);
sonix.abrirTetoSolar();
sonix.andar();

console.log(sonix.modelo, sonix.chassi, sonix.qtdPortas);

const carroBasico = new Carro('Basico', '9659859598598', 2);

console.log(carroBasico.modelo, carroBasico.chassi, carroBasico.qtdPortas);

carroBasico.andar();