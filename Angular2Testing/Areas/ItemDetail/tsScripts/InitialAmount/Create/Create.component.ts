/// ===========================================================================================
/// Create Initial Amount Component
/// ===========================================================================================
// Imports
import {Component, OnInit, OnDestroy, Input, Output, ViewContainerRef, EventEmitter, ViewChild, trigger } from
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
    selector: "id-initialAmounts-create",
    templateUrl: "Create.component.html"
})
export class InitialAmountCreateComponent implements OnInit {

    // General
    private title = "Create";
    private initialAmount: IInitialAmount;
    private initialAmountVm: IInitialAmountVm;
    private errorMessage: string;
    private validationMessage: string;
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
    ) { }

    /** --------------------------------------------------------------------
    *  Page Initialization
    ----------------------------------------------------------------------*/
    ngOnInit(): void {
      this.initialAmount = this.createNewInitialAmount();
      this.initialAmountVm = this.createNewInitialAmountVm();
    }


    /** --------------------------------------------------------------------
    *  Model initializers
    ----------------------------------------------------------------------*/
    createNewInitialAmount() {
      // Create a new Product
      const newInitialAmount: IInitialAmount = {
        PkID: 0,
        UserName: "rdonalson@ups.com",
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

    /**-------------------------------------------------------------------------------------------
    * If form is valid then create the record
    --------------------------------------------------------------------------------------------*/
    onUpdate() {
        // Check if one of the fields has been changed
        if (this.isDirty()) {
          // Call the service to Create the Product
          this.initialAmountService.createInitialAmount(this.initialAmount)
            .subscribe(() => { },
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


}