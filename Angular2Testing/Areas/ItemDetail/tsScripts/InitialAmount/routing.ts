/// ===========================================================================================
/// Initial Amount Routing
/// ===========================================================================================
// Imports
import { Component, ModuleWithProviders, Injectable } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Declarations
import { InitialAmountComponent } from "./Index/Index.component";
import { InitialAmountCreateComponent } from "./Create/Create.component";
import { InitialAmountEditComponent } from "./Edit/Edit.component";
// Route Configuration
export const routes: Routes = [
    { path: "", component: InitialAmountComponent },
    { path: "Create", component: InitialAmountCreateComponent },
    { path: "Edit/:id", component: InitialAmountEditComponent }
];
// Export
export const defaultRouting = RouterModule.forRoot(routes);