/// ===========================================================================================
/// Initial Amount Routing
/// ===========================================================================================
// Imports
import { Component, ModuleWithProviders, Injectable } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Declarations
import { TesterComponent } from "./Index/Index.component";

// Route Configuration
export const routes: Routes = [
    { path: "", component: TesterComponent }
];
// Export 
export const defaultRouting = RouterModule.forRoot(routes);

