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
/// Create Initial Amount Component
/// ===========================================================================================
// Imports
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var forms_1 = require("@angular/forms");
// Declarations
var DataStorage_1 = require("../Models/DataStorage");
var InitialAmount_service_1 = require("../Services/InitialAmount.service");
var Common_1 = require("../../Shared/Util/Common");
var my_currency_pipe_1 = require("../../Shared/Pipes/my-currency.pipe");
var InitialAmountCreateComponent = (function () {
    function InitialAmountCreateComponent(initialAmountService, router, activatedRoute, common, mycurpipe, data, formBuilder) {
        this.initialAmountService = initialAmountService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.common = common;
        this.mycurpipe = mycurpipe;
        this.data = data;
        this.formBuilder = formBuilder;
        // General
        this.title = "Create";
    }
    /** --------------------------------------------------------------------
    *  Page Initialization
    ----------------------------------------------------------------------*/
    InitialAmountCreateComponent.prototype.ngOnInit = function () {
        this.initialAmount = this.createNewInitialAmount();
        this.initialAmountVm = this.createNewInitialAmountVm();
    };
    /** --------------------------------------------------------------------
    *  Model initializers
    ----------------------------------------------------------------------*/
    InitialAmountCreateComponent.prototype.createNewInitialAmount = function () {
        // Create a new Product
        var newInitialAmount = {
            PkID: 0,
            UserName: "rdonalson@ups.com",
            Amount: 0,
            BeginDate: null
        };
        return newInitialAmount;
    };
    InitialAmountCreateComponent.prototype.createNewInitialAmountVm = function () {
        // Create a new Product
        var newInitialAmountVm = {
            Amount: "",
            BeginDate: ""
        };
        return newInitialAmountVm;
    };
    /** --------------------------------------------------------------------
    *  After page has rendered
    ----------------------------------------------------------------------*/
    InitialAmountCreateComponent.prototype.ngAfterViewInit = function () {
        // Local declarations
        var newBeginDateValue;
        //// Regex Validation
        //var regexAmountValidate = /^\$?\d{1,3}(,?\d{3})*(\.\d{1,2})?$/;
        var regexBeginDateValidate = /^[0,1]?\d{1}\/(([0-2]?\d{1})|([3][0,1]{1}))\/(([1]{1}[9]{1}[9]{1}\d{1})|([2-9]{1}\d{3}))$/;
        // Regex Replacement
        // Replace all characters except for these
        //var regexAmountCharReplace = /[^.0-9]/g;
        // Initializations
        this.txtAmount = $("#Amount");
        this.txtBeginDate = $("#BeginDate");
        this.submit = $("#Submit");
        //important point: You have to create a reference to this outer scope
        var parent = this;
        /** --------------------------------------------------------------------
          *  Begin Date validation and value prep
          ----------------------------------------------------------------------*/
        this.txtBeginDate.datepicker({
            changeMonth: true,
            changeYear: true
        }).change(function () {
            if (!regexBeginDateValidate.test(parent.txtBeginDate.val())) {
                parent.validationMessage = "Invalid Date!";
                parent.submit[0].disabled = true;
            }
            else {
                parent.validationMessage = "";
                newBeginDateValue = new Date(parent.txtBeginDate.val());
                if (parent.initBeginDateValue !== newBeginDateValue) {
                    // If the value interred by the user is different from the original then it's dirty
                    parent.beginDateDirty = true;
                    // Now set the value so it can update the database
                    parent.initialAmount.BeginDate = newBeginDateValue;
                    // Then enable the submit button for update
                    parent.submit[0].disabled = false;
                }
                /* Diagnostic */
                //console.log(`Update : initBeginDateValue = : ${JSON.stringify(parent.initBeginDateValue)} : newBeginDateValue = : ${JSON.stringify(newBeginDateValue)}`);
            }
        });
    };
    InitialAmountCreateComponent.prototype.changeModel = function (ev) {
        // Regex Validation
        var regexAmountValidate = /^\$?\d{1,3}(,?\d{3})*(\.\d{1,2})?$/;
        // Regex Replacement
        // Replace all characters except for these
        var regexAmountCharReplace = /[^.0-9]/g;
        this.txtAmount = $("#Amount");
        this.submit = $("#Submit");
        //important point: You have to create a reference to this outer scope
        var parent = this;
        this.processAmount(regexAmountValidate, regexAmountCharReplace, parent.initAmountValue, parent);
    };
    /** --------------------------------------------------------------------
    *  Amount Processing Utility
    ----------------------------------------------------------------------*/
    InitialAmountCreateComponent.prototype.processAmount = function (regexValidate, regexReplace, initAmountValue, thatObj) {
        if (!regexValidate.test(thatObj.txtAmount.val())) {
            thatObj.validationMessage = "Invalid Amount!";
            thatObj.submit[0].disabled = true;
        }
        else {
            thatObj.validationMessage = "";
            // parse out the new value
            var newAmountValue = parseFloat(this.common.replaceCharacters(thatObj.txtAmount.val(), regexReplace));
            if (initAmountValue !== newAmountValue) {
                // If the value interred by the user is different from the original then it's dirty
                thatObj.amountDirty = true;
                // Now set the value so it can update the database
                thatObj.initialAmount.Amount = newAmountValue;
                // Then enable the submit button for update
                thatObj.submit[0].disabled = false;
            }
        }
        /* Diagnostic */
        //console.log(`Update : initAmountValue = : ${JSON.stringify(initAmountValue)} : newAmountValue = : ${JSON.stringify(newAmountValue)}`);
    };
    /**-------------------------------------------------------------------------------------------
    * If form is valid then create the record
    --------------------------------------------------------------------------------------------*/
    InitialAmountCreateComponent.prototype.onUpdate = function () {
        var _this = this;
        // Check if one of the fields has been changed
        if (this.isDirty()) {
            // Call the service to Create the Product
            this.initialAmountService.createInitialAmount(this.initialAmount)
                .subscribe(function () { }, function (error) { return _this.errorMessage = error; });
            // Set refresh flag so data refreshes after navigation
            this.data.refresh = true;
            // Back to the Initial Amounts List
            this.listInitialAmount();
        }
        else {
            this.listInitialAmount();
        }
    };
    /** --------------------------------------------------------------------
      * Validate the User's inputs & set values before update
      ----------------------------------------------------------------------*/
    InitialAmountCreateComponent.prototype.isDirty = function () {
        return (this.amountDirty || this.beginDateDirty);
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
        templateUrl: "Create.component.html"
    }),
    __metadata("design:paramtypes", [InitialAmount_service_1.InitialAmountService,
        router_2.Router,
        router_1.ActivatedRoute,
        Common_1.Common,
        my_currency_pipe_1.MyCurrencyPipe,
        DataStorage_1.DataStorage,
        forms_1.FormBuilder])
], InitialAmountCreateComponent);
exports.InitialAmountCreateComponent = InitialAmountCreateComponent;
//# sourceMappingURL=Create.component.js.map