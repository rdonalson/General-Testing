"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// ===========================================================================================
/// Initial Amount Module
/// ===========================================================================================
// Imports
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_2 = require("@angular/common");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var forms_2 = require("@angular/forms");
// Declarations
var DataStorage_1 = require("./Models/DataStorage");
var app_component_1 = require("./app.component");
var routing_1 = require("./routing");
var Alert_component_1 = require("../Shared/Common/Alert.component");
var Common_1 = require("../Shared/Util/Common");
var my_currency_formatter_directive_1 = require("../Shared/Directives/my-currency-formatter.directive");
var my_currency_pipe_1 = require("../Shared/Pipes/my-currency.pipe");
var InitialAmount_service_1 = require("./Services/InitialAmount.service");
var Index_component_1 = require("./Index/Index.component");
var Create_component_1 = require("./Create/Create.component");
var Edit_component_1 = require("./Edit/Edit.component");
// Decorator
var AppModule = (function () {
    // Export
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            ng2_bootstrap_1.AlertModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            ng2_bootstrap_1.Ng2BootstrapModule,
            routing_1.defaultRouting
        ],
        declarations: [
            app_component_1.AppComponent,
            Alert_component_1.AlertComponent,
            my_currency_formatter_directive_1.MyCurrencyFormatterDirective,
            Index_component_1.InitialAmountComponent,
            Create_component_1.InitialAmountCreateComponent,
            Edit_component_1.InitialAmountEditComponent
        ],
        providers: [
            Common_1.Common,
            my_currency_pipe_1.MyCurrencyPipe,
            forms_2.FormBuilder,
            DataStorage_1.DataStorage,
            InitialAmount_service_1.InitialAmountService,
            { provide: common_2.APP_BASE_HREF, useValue: "/ItemDetail/InitialAmount" }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map