"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ForDirective = void 0;
var core_1 = require("@angular/core");
var ForDirective = /** @class */ (function () {
    function ForDirective() {
    }
    ForDirective.prototype.ngOnChanges = function (changes) {
        console.log(this.numbers);
        console.log(this.texto);
    };
    __decorate([
        core_1.Input('myForEm')
    ], ForDirective.prototype, "numbers");
    __decorate([
        core_1.Input('myForUsando')
    ], ForDirective.prototype, "texto");
    ForDirective = __decorate([
        core_1.Directive({
            selector: '[myFor]'
        })
    ], ForDirective);
    return ForDirective;
}());
exports.ForDirective = ForDirective;
