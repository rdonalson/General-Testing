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
/// Initial Amount Service
/// ===========================================================================================
// Imports
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// This service uses rxjs Observable or Observable
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
// This is marked Injectable because it will be
// consumed in the component class
var InitialAmountService = (function () {
    // Pass the Http object to the class through the constructor
    function InitialAmountService(http) {
        this.http = http;
        // This is the URL to the OData end point
        // When called from Area; Area name will be appended to beginning
        this.initialAmountUrl = "../odata/OdataInitialAmounts";
    }
    // ** Get all InitialAmounts **
    InitialAmountService.prototype.getInitialAmounts = function () {
        return this.http.get(this.initialAmountUrl)
            .map(function (response) { return response.json().value; })
            .do(function (data) { return JSON.stringify(data); })
            .catch(this.handleError);
    };
    // ** Get all InitialAmounts **
    InitialAmountService.prototype.getInitialAmount = function (id) {
        return this.http.get(this.initialAmountUrl + "(" + id + ")")
            .map(function (response) { return response.json(); })
            .do(function (data) { return JSON.stringify(data); })
            .catch(this.handleError);
    };
    // ** Delete an InitialAmount **
    InitialAmountService.prototype.deleteInitialAmount = function (id) {
        // A Delete does not return anything
        return this.http.delete(this.initialAmountUrl + "(" + id + ")")
            .catch(this.handleError);
    };
    // ** Create an InitialAmount **
    InitialAmountService.prototype.createInitialAmount = function (paramInitialAmount) {
        // This is a Post so we have to pass Headers
        var headers = new http_1.Headers({ 'Content-Type': "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        /* Diagnostic */
        //console.log(`paramInitialAmount: ${JSON.stringify(paramInitialAmount)}`);
        // Make the Angular 2 Post
        return this.http.post(this.initialAmountUrl, JSON.stringify(paramInitialAmount), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // ** Update the InitialAmount **
    InitialAmountService.prototype.updateInitialAmount = function (paramInitialAmount) {
        // This is a Put so we have to pass Headers
        var headers = new http_1.Headers({ 'Content-Type': "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        /* Diagnostic */
        //console.log(`paramInitialAmount: ${JSON.stringify(paramInitialAmount)}`);
        // Make the Angular 2 Put
        return this.http.put(this.initialAmountUrl + "(" + paramInitialAmount.PkID + ")", JSON.stringify(paramInitialAmount), options)
            .catch(this.handleError);
    };
    // ** Called when there are any errors **
    InitialAmountService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || "Server error");
    };
    return InitialAmountService;
}());
InitialAmountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], InitialAmountService);
exports.InitialAmountService = InitialAmountService;
//# sourceMappingURL=InitialAmount.service.js.map