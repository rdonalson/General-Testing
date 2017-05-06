/// ===========================================================================================
/// Tester
/// ===========================================================================================
// Imports
import { Component, OnInit, OnDestroy, Input, Output, ElementRef, ViewContainerRef, EventEmitter, ViewChild, trigger }
    from "@angular/core";
import { Router } from "@angular/router";

// Declarations
import { Common } from "../../Shared/Util/Common";
import { MyCurrencyFormatterDirective } from "../../Shared/Directives/my-currency-formatter.directive";
import { MyCurrencyPipe } from "../../Shared/Pipes/my-currency.pipe";
import { NgbdDatepickerPopup } from '../../Shared/Common/Datepicker-popup';


@Component({
    moduleId: module.id,
    selector: "id-tester",
    templateUrl: "../../../tsScripts/Tester/Index/Index.component.html"
})
export class TesterComponent implements OnInit, OnDestroy {
    private title = "Tester";
    name: string;
    balanceAmount: string;
    private errorMessage: string;
    //private alertComponent: AlertComponent;

    constructor(
        private common: Common,
        private readonly router: Router,
        private mycurpipe: MyCurrencyPipe
    ) {
        this.name = 'Martin';
        this.balanceAmount = this.mycurpipe.transform("1234567.89");
    }

    ngOnInit(): void {}

    private changeModel(ev) {
        this.balanceAmount = ev;
    }

    // Tests the character replace function in the Common Library
    testReplaceCharacters() {
        const pattern = /[^.a-z0-9-]/g; // Replaces digits, a period, lower case Alphas and a hyphen
        const result = this.common.replaceCharacters("$6,0w00.54", pattern);
        console.log(result);
        this.errorMessage = "Hey!!";
    }

    ngOnDestroy() {}
}