/// ===========================================================================================
/// Initial Amount Module
/// ===========================================================================================
// Imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { APP_BASE_HREF, Location } from "@angular/common";
import { Ng2BootstrapModule, AlertModule } from "ng2-bootstrap/ng2-bootstrap";
import { FormBuilder } from '@angular/forms';

// Declarations
import { DataStorage } from "./Models/DataStorage";
import { AppComponent } from "./app.component";
import { defaultRouting } from "./routing";
import { AlertComponent } from "../Shared/Common/Alert.component";
import { Common } from "../Shared/Util/Common";
import { MyCurrencyFormatterDirective } from "../Shared/Directives/my-currency-formatter.directive";
import { MyCurrencyPipe } from "../Shared/Pipes/my-currency.pipe";
import { InitialAmountService } from "./Services/InitialAmount.service";
import { InitialAmountComponent } from "./Index/Index.component";
import { InitialAmountCreateComponent } from "./Create/Create.component";
import { InitialAmountEditComponent } from "./Edit/Edit.component";

// Decorator
@NgModule({
    imports: [
        BrowserModule
        ,CommonModule
        ,FormsModule
        ,AlertModule
        ,HttpModule
        ,JsonpModule
        ,Ng2BootstrapModule
        ,defaultRouting
    ],
    declarations: [
        AppComponent
        ,AlertComponent
        ,MyCurrencyFormatterDirective
        ,InitialAmountComponent
        ,InitialAmountCreateComponent
        ,InitialAmountEditComponent
    ],
    providers: [
        Common
        ,MyCurrencyPipe
        ,FormBuilder
        ,DataStorage
        ,InitialAmountService
        ,{ provide: APP_BASE_HREF, useValue: "/ItemDetail/InitialAmount" }
    ],
    bootstrap: [AppComponent]
})
// Export
export class AppModule {
}