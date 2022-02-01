"use strict";
exports.__esModule = true;
exports.Finnaly = exports.Pricebook = exports.Libraries = void 0;
//Guidance about SRP (SINGLE RESPONSIBILITY PRINCIPlES) 
var Libraries = /** @class */ (function () {
    function Libraries(nomebook) {
        this.nomebook = nomebook;
    }
    return Libraries;
}());
exports.Libraries = Libraries;
var Pricebook = /** @class */ (function () {
    function Pricebook(pricebook) {
        this.pricebook = pricebook;
    }
    return Pricebook;
}());
exports.Pricebook = Pricebook;
var Finnaly = /** @class */ (function () {
    function Finnaly(bookone) {
        this.bookone = bookone;
    }
    return Finnaly;
}());
exports.Finnaly = Finnaly;
