/// ===========================================================================================
/// Create Initial Amount Component
/// ===========================================================================================
// Imports
import {Component, OnInit, OnDestroy, Input, Output, ViewContainerRef, EventEmitter, ViewChild, trigger } from
    "@angular/core";
import { Router } from "@angular/router";
// Declarations
import { IInitialAmount } from "../Models/InitialAmount";
import { InitialAmountService } from "../Services/InitialAmount.service";

@Component({
    moduleId: module.id,
    selector: "id-initialAmounts-create",
    templateUrl: "../../../tsScripts/InitialAmount/Create/Create.component.html"
})
export class InitialAmountCreateComponent implements OnInit {

    initialAmounts: IInitialAmount;
    errorMessage: string;

    constructor(
        private initialAmountService: InitialAmountService,
        private router: Router
    ) {
        /* Diagnostic */
        //console.log("Create Ctor");
    }

    ngOnInit(): void {
        /* Diagnostic */
        //console.log("Create OnInit");
    }

    listInitialAmount() {
        // Back to the Initial Amounts List
        this.router.navigate([""]);
    }
}