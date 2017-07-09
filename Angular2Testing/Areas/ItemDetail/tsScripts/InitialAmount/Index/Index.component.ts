/// ===========================================================================================
/// Initial Amount List Component
/// ===========================================================================================
// Imports
import {
    Component, OnInit, OnDestroy, Input, Output, ElementRef,
    ViewContainerRef, EventEmitter, ViewChild, trigger
}
    from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

// Declarations
import { DataStorage } from "../Models/DataStorage";
import { IInitialAmount } from "../Models/InitialAmount";
import { InitialAmountService } from "../Services/InitialAmount.service";
import { AlertComponent } from '../../Shared/Common/Alert.Component';

@Component({
    moduleId: module.id,
    selector: "id-initialAmounts",
    templateUrl: "../../../tsScripts/InitialAmount/Index/Index.component.html"
    //templateUrl: "Index.component.html"
})
export class InitialAmountComponent implements OnInit, OnDestroy {
    private title = "Initial Amount";
    private pkIdSelected: number;
    private showInitialAmount = false;
    private initialAmounts: IInitialAmount[];
    private errorMessage: string;
    private static pass: boolean = true;
    private refresh: any;
    private paramsSub: any;
    private alertComponent: AlertComponent;

    constructor(
        private initialAmountService: InitialAmountService
        ,private readonly router: Router
        ,private activatedRoute: ActivatedRoute,
        private data: DataStorage
    ) {
        // Only show is user is logged in
        this.showInitialAmount = false;
    }

    ngOnInit(): void {
        this.errorMessage = "";
        this.getInitialAmounts();
        /* Diagnostic */
        //console.log(`refresh value =: ${JSON.stringify(this.data.refresh)}`);
        if (this.data.refresh){
            location.reload();
            this.data.refresh = false;
        }
    }

    getInitialAmounts() {
        // Call the service
        this.initialAmountService.getInitialAmounts()
            .subscribe((initialAmounts) => {
                    // Set the returned data to the collection
                    this.initialAmounts = initialAmounts;
                    /* Diagnostic */
                    //console.log("initialAmounts: " + JSON.stringify(this.initialAmounts));
                },
                error => this.errorMessage = (error as any));

        // Show the initialAmounts list    
        this.showInitialAmount = true;
    }

    // ** Called when the Delte button is pressed **
    deleteProduct(initialAmount: IInitialAmount) {
      /* Diagnostic */
      //console.log("initialAmount: " + JSON.stringify(initialAmount));
      // Call the service to delete the Product
      this.initialAmountService.deleteInitialAmount(initialAmount.PkID)
      .subscribe(() => {
          // Refresh list - Get InitialAmounts
          this.getInitialAmounts();
        },
        error => this.errorMessage = <any>error);
    }

    // ** Called when the Create button is pressed **
    editInitialAmount(initialAmount: IInitialAmount) {
        // To Create Initial Amount
        this.pkIdSelected = initialAmount.PkID;
        /* Diagnostic */
        //console.log(`pkIdSelected: ${JSON.stringify(this.pkIdSelected)}`);
        this.router.navigate(["Edit", this.pkIdSelected]);
    }

    // ** Called when the Create button is pressed **
    createInitialAmount() {
        // To Create Initial Amount
        this.router.navigate(["Create"]);
    }

    ngOnDestroy() {}
}