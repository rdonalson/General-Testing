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
Object.defineProperty(exports, "__esModule", { value: true });
/// ===========================================================================================
/// Tester
/// ===========================================================================================
// Imports
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Declarations
var Common_1 = require("../../Shared/Util/Common");
var my_currency_pipe_1 = require("../../Shared/Pipes/my-currency.pipe");
var TesterComponent = (function () {
    function TesterComponent(common, router, mycurpipe) {
        this.common = common;
        this.router = router;
        this.mycurpipe = mycurpipe;
        this.title = "Tester";
        this.name = 'Martin';
        this.balanceAmount = this.mycurpipe.transform("1234567.89");
    }
    TesterComponent.prototype.ngOnInit = function () { };
    TesterComponent.prototype.changeModel = function (ev) {
        this.balanceAmount = ev;
    };
    // Tests the character replace function in the Common Library
    TesterComponent.prototype.testReplaceCharacters = function () {
        var pattern = /[^.a-z0-9-]/g; // Replaces digits, a period, lower case Alphas and a hyphen
        var result = this.common.replaceCharacters("$6,0w00.54", pattern);
        console.log(result);
        this.errorMessage = "Hey!!";
    };
    TesterComponent.prototype.ngOnDestroy = function () { };
    return TesterComponent;
}());
TesterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'id-tester',
        templateUrl: 'Index.component.html'
    }),
    __metadata("design:paramtypes", [Common_1.Common,
        router_1.Router,
        my_currency_pipe_1.MyCurrencyPipe])
], TesterComponent);
exports.TesterComponent = TesterComponent;
//# sourceMappingURL=Index.component.js.map