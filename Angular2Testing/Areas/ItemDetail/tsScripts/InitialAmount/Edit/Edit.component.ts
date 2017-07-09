/// ===========================================================================================
/// Edit Initial Amount Component
/// ===========================================================================================
/// References
/// <reference path="../../../../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../../../../typings/globals/jqueryui/index.d.ts" />
// Imports
import {
    Component, OnInit, OnDestroy, Input, Output,
    ViewContainerRef, EventEmitter, ViewChild, trigger
    } from
    "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

// Declarations
import { DataStorage } from "../Models/DataStorage";
import { IInitialAmount } from "../Models/InitialAmount";
import { IInitialAmountVm } from "../Models/InitialAmountVm";
import { InitialAmountService } from "../Services/InitialAmount.service";
import { Common } from "../../Shared/Util/Common";
import { MyCurrencyPipe } from "../../Shared/Pipes/my-currency.pipe";
declare var $: JQueryStatic;

@Component({
    moduleId: module.id,
    selector: "id-initialAmounts-edit",
    templateUrl: "Edit.component.html"
})
export class InitialAmountEditComponent implements OnInit, OnDestroy {
    // General
    private title = "Edit";
    private initialAmount: IInitialAmount;
    private initialAmountVm: IInitialAmountVm;
    private errorMessage: string;
    private validationMessage: string;
    private id: any;
    private paramsSub: any;
    // Amount
    private txtAmount: any;
    private initAmountValue: number;
    private amountDirty: boolean;
    // BeginDate
    private txtBeginDate: any;
    private initBeginDateValue: Date;
    private beginDateDirty: boolean;
    // Command
    private submit: any;

    constructor(
        private initialAmountService: InitialAmountService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private common: Common,
        private mycurpipe: MyCurrencyPipe,
        private data: DataStorage,
        private formBuilder: FormBuilder
    ) {}

    /** --------------------------------------------------------------------
    *  Page Initialization
    ----------------------------------------------------------------------*/
    ngOnInit(): void {
        this.paramsSub = this.activatedRoute.params
            .subscribe(params => this.id = parseInt(params["id"], 10));
        /* Diagnostic */
        //console.log(`Edit OnInit : id=: ${JSON.stringify(this.id)}`);
        this.getInitialAmount(this.id);
        /* Diagnostic */
        //console.log(`Edit OnInit : initialAmount=: ${JSON.stringify(this.initialAmount)}`);
        this.initialAmount = this.createNewInitialAmount();
        this.initialAmountVm = this.createNewInitialAmountVm();
    }

    /** --------------------------------------------------------------------
    *  After page has rendered
    ----------------------------------------------------------------------*/
    ngAfterViewInit() {
        // Local declarations
        var newBeginDateValue: Date;
        //// Regex Validation
        //var regexAmountValidate = /^\$?\d{1,3}(,?\d{3})*(\.\d{1,2})?$/;
        var regexBeginDateValidate =
            /^[0,1]?\d{1}\/(([0-2]?\d{1})|([3][0,1]{1}))\/(([1]{1}[9]{1}[9]{1}\d{1})|([2-9]{1}\d{3}))$/;
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
        }).change(() => {
            if (!regexBeginDateValidate.test(parent.txtBeginDate.val())) {
                parent.validationMessage = "Invalid Date!";
                parent.submit[0].disabled = true;
            } else {
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
    }

    private changeModel(ev) {
        // Regex Validation
        var regexAmountValidate = /^\$?\d{1,3}(,?\d{3})*(\.\d{1,2})?$/;
        // Regex Replacement
        // Replace all characters except for these
        var regexAmountCharReplace = /[^.0-9]/g;
        this.txtAmount = $("#Amount");
        this.submit = $("#Submit");
        //important point: You have to create a reference to this outer scope
        var parent = this;
        this.processAmount(
            regexAmountValidate,
            regexAmountCharReplace,
            parent.initAmountValue,
            parent
        );
    }

    /** --------------------------------------------------------------------
    *  Amount Processing Utility
    ----------------------------------------------------------------------*/
    processAmount(
        regexValidate: RegExp,
        regexReplace: RegExp,
        initAmountValue: number,
        thatObj: any
    ) {
        if (!regexValidate.test(thatObj.txtAmount.val())) {
            thatObj.validationMessage = "Invalid Amount!";
            thatObj.submit[0].disabled = true;
        } else {
            thatObj.validationMessage = "";
            // parse out the new value
            const newAmountValue = parseFloat(
                this.common.replaceCharacters(thatObj.txtAmount.val(), regexReplace)
            );
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
    }

    /** --------------------------------------------------------------------
    *  Get the Initial Amount to edit
    ----------------------------------------------------------------------*/
    getInitialAmount(id: number) {
        // Call the service
        this.initialAmountService.getInitialAmount(id)
            .subscribe((initialAmount) => {
                    /* Diagnostic */
                    //console.log(`initialAmount: ${JSON.stringify(initialAmount)}`);

                    this.initialAmount.PkID = initialAmount.PkID;
                    this.initialAmount.UserName = initialAmount.UserName;
                    this.initialAmount.Amount = initialAmount.Amount != null ? initialAmount.Amount : 0;
                    this.initAmountValue = this.initialAmount.Amount;
                    this.initialAmount.BeginDate = initialAmount.BeginDate !== null
                        ? new Date(initialAmount.BeginDate)
                        : null;
                    this.initBeginDateValue = this.initialAmount.BeginDate;

                    // Set the returned data to the collection
                    this.initialAmountVm.Amount = this.mycurpipe.transform(this.initAmountValue.toString());
                    this.initialAmountVm.BeginDate = this.initBeginDateValue != null
                        ? $.datepicker.formatDate("mm/dd/yy", new Date(this.initBeginDateValue.toString()))
                        : "";
                    /* Diagnostic */
                    //console.log(`this.initialAmount: ${JSON.stringify(this.initialAmountVm)}`);
                },
                error => this.errorMessage = (error as any));


    }

    /** --------------------------------------------------------------------
    *  Model initializers
    ----------------------------------------------------------------------*/
    createNewInitialAmount() {
        // Create a new Product
        const newInitialAmount: IInitialAmount = {
            PkID: 0,
            UserName: "",
            Amount: 0,
            BeginDate: null
        };
        return newInitialAmount;
    }

    createNewInitialAmountVm() {
        // Create a new Product
        const newInitialAmountVm: IInitialAmountVm = {
            Amount: "",
            BeginDate: ""
        };
        return newInitialAmountVm;
    }

    /**-------------------------------------------------------------------------------------------
     * If form is valid then update the record
     --------------------------------------------------------------------------------------------*/
    onUpdate() {
        // Check if one of the fields has been changed
        if (this.isDirty()) {
            // Call the service to update the Product
            this.initialAmountService.updateInitialAmount(this.initialAmount)
                .subscribe(() => {},
                    error => this.errorMessage = (error as any));
            // Set refresh flag so data refreshes after navigation
            this.data.refresh = true;
            // Back to the Initial Amounts List
            this.listInitialAmount();
        } else {
            this.listInitialAmount();
        }
    }

    /** --------------------------------------------------------------------
     * Validate the User's inputs & set values before update
     ----------------------------------------------------------------------*/
    isDirty(): boolean {
        return (this.amountDirty || this.beginDateDirty);
    }

    listInitialAmount() {
        // Back to the Initial Amounts List
        this.router.navigate([""]);
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }


}

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