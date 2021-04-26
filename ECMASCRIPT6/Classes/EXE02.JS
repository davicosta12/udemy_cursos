class VideoGame {
    constructor(marca, nControles, tipoMidia) {
        this.marca = marca;
        this.nControles = nControles;
        this.tipoMidia = tipoMidia;
    }
}

class PlayStation extends VideoGame {
    constructor(marca, nControles, tipoMidia, nEntradasUSB, voltagem, adicionais) {
        super(marca, nControles, tipoMidia);
        this.nEntradasUSB = nEntradasUSB;
        this.voltagem = voltagem;
        this.adicionais = adicionais;
    }
}

let playStation = new PlayStation('sony', '2', 'dvd','4', '280v', ['suporte de controle']);

console.log(playStation);