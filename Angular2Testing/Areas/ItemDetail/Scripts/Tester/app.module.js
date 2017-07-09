"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// ===========================================================================================
/// Tester Module
/// ===========================================================================================
// Imports
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Declarations
var app_component_1 = require("./app.component");
var routing_1 = require("./routing");
var Index_component_1 = require("./Index/Index.component");
var Common_1 = require("../Shared/Util/Common");
var shared_module_1 = require("./shared.module");
var my_currency_pipe_1 = require("../Shared/Pipes/my-currency.pipe");
var Alert_component_1 = require("../Shared/Common/Alert.component");
var Datepicker_popup_1 = require("../Shared/Common/Datepicker-popup");
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
            forms_1.FormsModule,
            ng2_bootstrap_1.AlertModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            ng2_bootstrap_1.Ng2BootstrapModule,
            routing_1.defaultRouting,
            shared_module_1.SharedModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            Index_component_1.TesterComponent,
            Alert_component_1.AlertComponent,
            Datepicker_popup_1.NgbdDatepickerPopup
        ],
        providers: [
            Common_1.Common,
            my_currency_pipe_1.MyCurrencyPipe,
            { provide: common_1.APP_BASE_HREF, useValue: "/ItemDetail/Tester" }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
    // Export
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map