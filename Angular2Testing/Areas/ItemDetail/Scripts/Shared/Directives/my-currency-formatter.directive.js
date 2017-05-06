"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// ===========================================================================================
/// Currency Pipe Directive
/// ===========================================================================================
// Imports
var core_1 = require("@angular/core");
var my_currency_pipe_1 = require("../Pipes/my-currency.pipe");
var MyCurrencyFormatterDirective = (function () {
    function MyCurrencyFormatterDirective(elementRef, currencyPipe) {
        this.elementRef = elementRef;
        this.currencyPipe = currencyPipe;
        this.el = this.elementRef.nativeElement;
    }
    MyCurrencyFormatterDirective.prototype.ngOnInit = function () {
        this.el.value = this.currencyPipe.transform(this.el.value);
    };
    MyCurrencyFormatterDirective.prototype.onFocus = function (value) {
        this.el.value = this.currencyPipe.parse(value); // opposite of transform
    };
    MyCurrencyFormatterDirective.prototype.onBlur = function (value) {
        this.el.value = this.currencyPipe.transform(value);
    };
    return MyCurrencyFormatterDirective;
}());
__decorate([
    core_1.HostListener("focus", ["$event.target.value"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyCurrencyFormatterDirective.prototype, "onFocus", null);
__decorate([
    core_1.HostListener("blur", ["$event.target.value"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyCurrencyFormatterDirective.prototype, "onBlur", null);
MyCurrencyFormatterDirective = __decorate([
    core_1.Directive({ selector: "[myCurrencyFormatter]" }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        my_currency_pipe_1.MyCurrencyPipe])
], MyCurrencyFormatterDirective);
exports.MyCurrencyFormatterDirective = MyCurrencyFormatterDirective;
//# sourceMappingURL=my-currency-formatter.directive.js.map