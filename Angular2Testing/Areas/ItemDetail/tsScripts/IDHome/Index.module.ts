/// ===========================================================================================
/// ID Home Module
/// ===========================================================================================
// Imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

// Declarations
import { IdHomeComponent } from "./Index.component";

// Decorator
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        IdHomeComponent
    ],
    providers: [
        //PetService
    ],
    bootstrap: [IdHomeComponent]
})
export class IdHomeModule {
}