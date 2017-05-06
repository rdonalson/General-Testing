/// ===========================================================================================
/// Tester Module
/// ===========================================================================================
// Imports
import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { APP_BASE_HREF, Location } from "@angular/common";
import { Ng2BootstrapModule, AlertModule } from "ng2-bootstrap/ng2-bootstrap";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Declarations
import { AppComponent } from "./app.component";
import { defaultRouting } from "./routing";
import { TesterComponent } from "./Index/Index.component";
import { Common } from "../Shared/Util/Common";
import { SharedModule } from "./shared.module";
import { MyCurrencyPipe } from "../Shared/Pipes/my-currency.pipe";
import { AlertComponent } from "../Shared/Common/Alert.component";
import { NgbdDatepickerPopup } from '../Shared/Common/Datepicker-popup';

// Decorator
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AlertModule,
        HttpModule,
        JsonpModule,
        Ng2BootstrapModule,
        defaultRouting,
        SharedModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent
        ,TesterComponent
        ,AlertComponent
        ,NgbdDatepickerPopup
    ],
    providers: [
        Common,
        ,MyCurrencyPipe
        ,{ provide: APP_BASE_HREF, useValue: "/ItemDetail/Tester" }
    ],
    bootstrap: [AppComponent]
})
// Export
export class AppModule {
}