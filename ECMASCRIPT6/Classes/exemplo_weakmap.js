const propriedades = new WeakMap();

class VideoGame {
    constructor(nome, controles, saida, midia) {
        propriedades.set(this,{nome, controles, saida, midia});
    }
    
    recuperaPropriedade(propriedade) {
        return propriedades.get(this)[propriedade];
    }
}

const caixa360 = new VideoGame('caixa360', 4, 'hdmi', 'dvd');

console.log(caixa360.recuperaPropriedade('nome'));