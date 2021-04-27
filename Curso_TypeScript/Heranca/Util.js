"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.randomizar = function (inicio, fim) {
        return inicio + Math.random() * (fim - inicio);
    };
    return Util;
}());
exports.Util = Util;
