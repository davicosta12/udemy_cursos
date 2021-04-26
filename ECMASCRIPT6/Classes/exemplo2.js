class Carro {
    abrirPorta() {
        console.log('abrindo porta');
    }
    
    static fecharPorta() {
        console.log('fechando porta');
    }
}

const carro = new Carro();
carro.abrirPorta();

Carro.fecharPorta();