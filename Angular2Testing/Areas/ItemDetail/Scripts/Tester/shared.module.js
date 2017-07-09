"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// ===========================================================================================
/// Shared Module
/// ===========================================================================================
// Imports
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var my_highlight_directive_1 = require("../Shared/Directives/my-highlight.directive");
var my_currency_formatter_directive_1 = require("../Shared/Directives/my-currency-formatter.directive");
var my_currency_pipe_1 = require("../Shared/Pipes/my-currency.pipe");
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            my_currency_pipe_1.MyCurrencyPipe,
            my_highlight_directive_1.HighlightDirective,
            my_currency_formatter_directive_1.MyCurrencyFormatterDirective
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            my_highlight_directive_1.HighlightDirective,
            my_currency_formatter_directive_1.MyCurrencyFormatterDirective,
            my_currency_pipe_1.MyCurrencyPipe
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;
//# sourceMappingURL=shared.module.js.map