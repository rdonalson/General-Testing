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
/// Edit Initial Amount Component
/// ===========================================================================================
/// References
/// <reference path="../../../../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../../../../typings/globals/jqueryui/index.d.ts" />
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
var InitialAmountEditComponent = (function () {
    function InitialAmountEditComponent(initialAmountService, router, activatedRoute, common, mycurpipe, data, formBuilder) {
        this.initialAmountService = initialAmountService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.common = common;
        this.mycurpipe = mycurpipe;
        this.data = data;
        this.formBuilder = formBuilder;
        // General
        this.title = "Edit";
    }
    /** --------------------------------------------------------------------
    *  Page Initialization
    ----------------------------------------------------------------------*/
    InitialAmountEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.params
            .subscribe(function (params) { return _this.id = parseInt(params["id"], 10); });
        /* Diagnostic */
        //console.log(`Edit OnInit : id=: ${JSON.stringify(this.id)}`);
        this.getInitialAmount(this.id);
        /* Diagnostic */
        //console.log(`Edit OnInit : initialAmount=: ${JSON.stringify(this.initialAmount)}`);
        this.initialAmount = this.createNewInitialAmount();
        this.initialAmountVm = this.createNewInitialAmountVm();
    };
    /** --------------------------------------------------------------------
    *  After page has rendered
    ----------------------------------------------------------------------*/
    InitialAmountEditComponent.prototype.ngAfterViewInit = function () {
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
        //this.txtAmount.autoNumeric("init",
        //{
        //    currencySymbol: "$"
        //}).mouseleave(() => {
        //    parent.processAmount(
        //        regexAmountValidate,
        //        regexAmountCharReplace,
        //        parent.initAmountValue,
        //        parent
        //    );
        //}).blur(() => {
        //    parent.processAmount(
        //        regexAmountValidate,
        //        regexAmountCharReplace,
        //        parent.initAmountValue,
        //        parent
        //    );
        //});
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
            }
        });
    };
    //if (!regexAmountValidate.test(that.txtAmount.val())) {
    //    that.validationMessage = "Invalid Amount!";
    //    that.submit[0].disabled = true;
    //} else {
    //    that.validationMessage = "";
    //    that.submit[0].disabled = false;
    //    newAmountValue = parseFloat(
    //        that.common.replaceCharacters(that.txtAmount.val(), regexAmountCharReplace)
    //    );
    //    // If the value interred by the user is different from the original then it's dirty
    //    that.amountDirty = !(initAmountValue === newAmountValue);
    //    // Now set the value so it can update the database
    //    that.initialAmount.Amount = newAmountValue;
    //}
    InitialAmountEditComponent.prototype.changeModel = function (ev) {
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
    InitialAmountEditComponent.prototype.processAmount = function (regexValidate, regexReplace, initAmountValue, thatObj) {
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
    /** --------------------------------------------------------------------
    *  Get the Initial Amount to edit
    ----------------------------------------------------------------------*/
    InitialAmountEditComponent.prototype.getInitialAmount = function (id) {
        var _this = this;
        // Call the service
        this.initialAmountService.getInitialAmount(id)
            .subscribe(function (initialAmount) {
            /* Diagnostic */
            //console.log(`initialAmount: ${JSON.stringify(initialAmount)}`);
            _this.initialAmount.PkID = initialAmount.PkID;
            _this.initialAmount.UserName = initialAmount.UserName;
            _this.initialAmount.Amount = initialAmount.Amount != null ? initialAmount.Amount : 0;
            _this.initAmountValue = _this.initialAmount.Amount;
            _this.initialAmount.BeginDate = initialAmount.BeginDate !== null
                ? new Date(initialAmount.BeginDate)
                : null;
            _this.initBeginDateValue = _this.initialAmount.BeginDate;
            // Set the returned data to the collection
            _this.initialAmountVm.Amount = _this.mycurpipe.transform(_this.initAmountValue.toString());
            _this.initialAmountVm.BeginDate = _this.initBeginDateValue != null
                ? $.datepicker.formatDate("mm/dd/yy", new Date(_this.initBeginDateValue.toString()))
                : "";
            /* Diagnostic */
            //console.log(`this.initialAmount: ${JSON.stringify(this.initialAmountVm)}`);
        }, function (error) { return _this.errorMessage = error; });
    };
    /** --------------------------------------------------------------------
    *  Model initializers
    ----------------------------------------------------------------------*/
    InitialAmountEditComponent.prototype.createNewInitialAmount = function () {
        // Create a new Product
        var newInitialAmount = {
            PkID: 0,
            UserName: "",
            Amount: 0,
            BeginDate: null
        };
        return newInitialAmount;
    };
    InitialAmountEditComponent.prototype.createNewInitialAmountVm = function () {
        // Create a new Product
        var newInitialAmountVm = {
            Amount: "",
            BeginDate: ""
        };
        return newInitialAmountVm;
    };
    /**-------------------------------------------------------------------------------------------
     * If form is valid then update the record
     --------------------------------------------------------------------------------------------*/
    InitialAmountEditComponent.prototype.onUpdate = function () {
        var _this = this;
        // Check if one of the fields has been changed
        if (this.isDirty()) {
            // Call the service to update the Product
            this.initialAmountService.updateInitialAmount(this.initialAmount)
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
    InitialAmountEditComponent.prototype.isDirty = function () {
        return (this.amountDirty || this.beginDateDirty);
    };
    InitialAmountEditComponent.prototype.listInitialAmount = function () {
        // Back to the Initial Amounts List
        this.router.navigate([""]);
    };
    InitialAmountEditComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
    };
    return InitialAmountEditComponent;
}());
InitialAmountEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "id-initialAmounts-edit",
        templateUrl: "../../../tsScripts/InitialAmount/Edit/Edit.component.html"
    }),
    __metadata("design:paramtypes", [InitialAmount_service_1.InitialAmountService,
        router_2.Router,
        router_1.ActivatedRoute,
        Common_1.Common,
        my_currency_pipe_1.MyCurrencyPipe,
        DataStorage_1.DataStorage,
        forms_1.FormBuilder])
], InitialAmountEditComponent);
exports.InitialAmountEditComponent = InitialAmountEditComponent;
//if (!regexAmountValidate.test(that.txtAmount.val())) {
//    that.validationMessage = "Invalid Amount!";
//    that.submit[0].disabled = true;
//} else {
//    that.validationMessage = "";
//    that.submit[0].disabled = false;
//    newAmountValue = parseFloat(
//        that.common.replaceCharacters(that.txtAmount.val(), regexAmountCharReplace)
//    );
//    // If the value interred by the user is different from the original then it's dirty
//    that.amountDirty = !(initAmountValue === newAmountValue);
//    // Now set the value so it can update the database
//    that.initialAmount.Amount = newAmountValue;
//}
// Regex Replacement
// Replace all characters except for these
/* Diagnostic */
//console.log(`Update : initialAmountVm = : ${JSON.stringify(this.initialAmountVm)}`);
//if (!regexBeginDateValidate.test(this.initialAmountVm.BeginDate)) {
//    //valid = false;
//    this.validationMessage = "Invalid Date!";
//} else {
//    var vmDate = new Date(this.initialAmountVm.BeginDate);
//    if (this.data.initialAmount.BeginDate !== vmDate) {
//        this.beginDateDirty = true;
//        this.data.initialAmount.BeginDate = vmDate;
//    }
//}
//if (!regexAmountValidate.test(this.initialAmountVm.Amount)) {
//    valid = false;
//    this.validationMessage += "Invalid Amount!";
//} else {
//    const regexAmountCharReplace = /[^.0-9]/g;
//    this.initialAmount.Amount = parseFloat(
//        this.common.replaceCharacters(this.initialAmountVm.Amount, regexAmountCharReplace)
//    );
//}
/* Diagnostic */
//console.log(`Update : initialAmount = : ${JSON.stringify(this.initialAmount)}`);
//return valid;
//this.txtAmount.autoNumeric("init",
//    {
//        currencySymbol: "$"
//    }).focus(() => {
//        that.initialAmountVm.Amount = this.txtAmount.val();
//    }).change(() => {
//        that.initialAmountVm.Amount = this.txtAmount.val();
//    }).blur(() => {
//        that.initialAmountVm.Amount = this.txtAmount.val();
//        // Regex Validation
//        const regexAmountValidate = /^\$?\d{1,3}(,?\d{3})*(\.\d{1,2})?$/;
//        // Regex Replacement
//        // Replace all characters except for these
//        const regexAmountCharReplace = /[^.0-9]/g;
//        /* Diagnostic */
//        //console.log(`Update : initialAmountVm = : ${JSON.stringify(this.initialAmountVm)}`);
//        if (!regexAmountValidate.test(this.initialAmountVm.Amount)) {
//            this.validationMessage += "Invalid Amount!";
//            this.amountValid = false;
//        } else {
//            this.amountValue = parseFloat(
//                this.common.replaceCharacters(this.initialAmountVm.Amount, regexAmountCharReplace)
//            );
//            // If the value interred by the user is different from the original then it's dirty
//            this.amountDirty = !(this.amountValue === this.initialAmount.Amount);
//            // Now set the value so it can update the database
//            this.initialAmount.Amount = this.amountValue;
//        }
//    });
//this.txtBeginDate.datepicker({
//    changeMonth: true,
//    changeYear: true
//}).change(() => {
//    that.initialAmountVm.BeginDate = this.txtBeginDate.val();
//}).blur(() => {
//    that.initialAmountVm.BeginDate = this.txtBeginDate.val();
//}); 
//# sourceMappingURL=Edit.component.js.map