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
/// Initial Amount List Component
/// ===========================================================================================
// Imports
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Declarations
var DataStorage_1 = require("../Models/DataStorage");
var InitialAmount_service_1 = require("../Services/InitialAmount.service");
var InitialAmountComponent = (function () {
    function InitialAmountComponent(initialAmountService, router, activatedRoute, data) {
        this.initialAmountService = initialAmountService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.data = data;
        this.title = "Initial Amount";
        this.showInitialAmount = false;
        // Only show is user is logged in
        this.showInitialAmount = false;
    }
    InitialAmountComponent.prototype.ngOnInit = function () {
        this.errorMessage = "";
        this.getInitialAmounts();
        /* Diagnostic */
        //console.log(`refresh value =: ${JSON.stringify(this.data.refresh)}`);
        if (this.data.refresh) {
            location.reload();
            this.data.refresh = false;
        }
    };
    InitialAmountComponent.prototype.getInitialAmounts = function () {
        var _this = this;
        // Call the service
        this.initialAmountService.getInitialAmounts()
            .subscribe(function (initialAmounts) {
            // Set the returned data to the collection
            _this.initialAmounts = initialAmounts;
            /* Diagnostic */
            //console.log("initialAmounts: " + JSON.stringify(this.initialAmounts));
        }, function (error) { return _this.errorMessage = error; });
        // Show the initialAmounts list    
        this.showInitialAmount = true;
    };
    // ** Called when the Create button is pressed **
    InitialAmountComponent.prototype.editInitialAmount = function (initialAmount) {
        // To Create Initial Amount
        this.pkIdSelected = initialAmount.PkID;
        /* Diagnostic */
        //console.log(`pkIdSelected: ${JSON.stringify(this.pkIdSelected)}`);
        this.router.navigate(["Edit", this.pkIdSelected]);
    };
    // ** Called when the Create button is pressed **
    InitialAmountComponent.prototype.createInitialAmount = function () {
        // To Create Initial Amount
        this.router.navigate(["Create"]);
    };
    InitialAmountComponent.prototype.ngOnDestroy = function () {
    };
    return InitialAmountComponent;
}());
InitialAmountComponent.pass = true;
InitialAmountComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "id-initialAmounts",
        templateUrl: "../../../tsScripts/InitialAmount/Index/Index.component.html"
    }),
    __metadata("design:paramtypes", [InitialAmount_service_1.InitialAmountService,
        router_1.Router,
        router_1.ActivatedRoute,
        DataStorage_1.DataStorage])
], InitialAmountComponent);
exports.InitialAmountComponent = InitialAmountComponent;
//# sourceMappingURL=Index.component.js.map