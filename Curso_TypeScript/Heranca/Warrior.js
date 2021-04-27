"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
var Personagem_1 = require("./Personagem");
var Util_1 = require("./Util");
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(nome) {
        var _this = _super.call(this, nome) || this;
        _this._armadura = Util_1.Util.randomizar(1000, 10000);
        _this._vidaMaxima = Util_1.Util.randomizar(200, 10000);
        _this._vidaAtual = Util_1.Util.randomizar(20, _this._vidaMaxima);
        _this._vidaAtual = 100;
        _this._forca = Util_1.Util.randomizar(100, 1000);
        _this._agilidade = Util_1.Util.randomizar(100, 1000);
        return _this;
    }
    return Warrior;
}(Personagem_1.Personagem));
exports.Warrior = Warrior;
