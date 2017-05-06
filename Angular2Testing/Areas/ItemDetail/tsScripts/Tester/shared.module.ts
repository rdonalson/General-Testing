/// ===========================================================================================
/// Shared Module
/// ===========================================================================================
// Imports
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HighlightDirective } from "../Shared/Directives/my-highlight.directive";
import { MyCurrencyFormatterDirective } from "../Shared/Directives/my-currency-formatter.directive";
import { MyCurrencyPipe } from "../Shared/Pipes/my-currency.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ], // module dependencies
    declarations: [
        MyCurrencyPipe,
        HighlightDirective,
        MyCurrencyFormatterDirective
    ], // components and directives
    exports: [
        CommonModule,
        FormsModule,
        HighlightDirective,
        MyCurrencyFormatterDirective,
        MyCurrencyPipe
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}