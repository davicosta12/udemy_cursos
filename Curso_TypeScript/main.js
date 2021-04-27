"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Personagem_1 = __importDefault(require("./Personagem"));
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var person = new Personagem_1.default("Sansa Stark", 100, 40, 20, 20);
var teclado = prompt_sync_1.default();
var option = 0;
while (option != 9 || person.isDead()) {
    console.log("+========= Personagem " + person.nome + "=============");
    console.log("|1. Treinar ataque                 |");
    console.log("|2. Treinar defesa                 |");
    console.log("|3. Descansar                      |");
    console.log("|4. Entrar em batalha              |");
    console.log("|8. Imprimir atributos             |");
    console.log("|9. Sair                           |");
    console.log("+==================================+");
    console.log(person.isDead());
    option = +teclado("Escolha uma ação: ");
    switch (option) {
        case 1:
            person.treinarAtacar();
            console.log(person.status());
            break;
        case 2:
            person.treinarDefesa();
            console.log(person.status());
            break;
        case 3:
            var horas = +teclado("Digite o número de horas: ");
            person.descansar(horas);
            console.log(person.status());
            break;
        case 4:
            var rest = person.batalhar();
            console.log("Esta batalha custo " + rest + " de energia");
            console.log(person.status());
            break;
        case 8:
            console.log(person.status());
            break;
        default:
            break;
    }
}
console.log("Ops! Morreu!");
