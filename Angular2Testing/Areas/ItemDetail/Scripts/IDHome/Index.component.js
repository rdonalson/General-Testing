"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// ===========================================================================================
/// ID Home App
/// ===========================================================================================
// Imports
var core_1 = require("@angular/core");
var IdHomeComponent = (function () {
    // App Component class
    function IdHomeComponent() {
    }
    return IdHomeComponent;
}());
IdHomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "id-app",
        template: "<h2>Item Detail</h2>"
    })
    // App Component class
], IdHomeComponent);
exports.IdHomeComponent = IdHomeComponent;
//# sourceMappingURL=Index.component.js.map