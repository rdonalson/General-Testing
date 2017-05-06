/// ===========================================================================================
/// Tester App
/// ===========================================================================================
// Imports
import { Component, ViewContainerRef } from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: "id-testerapp",
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    private viewContainerRef: ViewContainerRef;

    //private name: string = "Initial Amount";
    public constructor(viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application
        // root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}