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
/// Create Initial Amount Component
/// ===========================================================================================
// Imports
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var InitialAmount_service_1 = require("../Services/InitialAmount.service");
var InitialAmountCreateComponent = (function () {
    function InitialAmountCreateComponent(initialAmountService, router) {
        this.initialAmountService = initialAmountService;
        this.router = router;
        /* Diagnostic */
        //console.log("Create Ctor");
    }
    InitialAmountCreateComponent.prototype.ngOnInit = function () {
        /* Diagnostic */
        //console.log("Create OnInit");
    };
    InitialAmountCreateComponent.prototype.listInitialAmount = function () {
        // Back to the Initial Amounts List
        this.router.navigate([""]);
    };
    return InitialAmountCreateComponent;
}());
InitialAmountCreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "id-initialAmounts-create",
        templateUrl: "../../../tsScripts/InitialAmount/Create/Create.component.html"
    }),
    __metadata("design:paramtypes", [InitialAmount_service_1.InitialAmountService,
        router_1.Router])
], InitialAmountCreateComponent);
exports.InitialAmountCreateComponent = InitialAmountCreateComponent;
//# sourceMappingURL=Create.component.js.map