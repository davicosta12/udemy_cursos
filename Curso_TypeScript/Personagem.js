"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personagem = /** @class */ (function () {
    function Personagem(_nome, _energia, _vida, _ataque, _defesa) {
        this._nome = _nome;
        this._energia = _energia;
        this._vida = _vida;
        this._ataque = _ataque;
        this._defesa = _defesa;
    }
    Object.defineProperty(Personagem.prototype, "nome", {
        //  TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARAMETRO
        //  TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE, USE RETORNO
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Personagem.prototype.status = function () {
        return ("Guerreiro: \n" +
            "\nNome: " +
            this._nome +
            ("\nEnergia: " + this._energia.toFixed(1)) +
            ("\nAtaque: " + this._ataque.toFixed(1)) +
            ("\nDefesa: " + this._defesa.toFixed(1)));
    };
    Personagem.prototype.treinarAtacar = function () {
        this._ataque += this.randomizar(7);
        this._energia -= this.randomizar(5);
        if (this._defesa > 100) {
            this._defesa = 0;
        }
    };
    Personagem.prototype.treinarDefesa = function () {
        this._defesa += this.randomizar(5);
        this._energia -= this.randomizar(10);
        if (this._defesa > 100) {
            this._defesa = 0;
        }
    };
    Personagem.prototype.descansar = function (hour) {
        this._energia += hour * this.randomizar(10);
        if (this._energia > 100) {
            this._energia = 100;
        }
    };
    Personagem.prototype.batalhar = function () {
        var desgaste = this.randomizar(10);
        this._energia -= desgaste;
        return desgaste;
    };
    Personagem.prototype.isDead = function () {
        return this._energia < 0;
    };
    Personagem.prototype.randomizar = function (fator) {
        return Math.random() * fator;
    };
    return Personagem;
}());
exports.default = Personagem;
