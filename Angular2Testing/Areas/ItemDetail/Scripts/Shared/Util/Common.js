"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// ===========================================================================================
/// Tester Module
/// ===========================================================================================
// Imports
var core_1 = require("@angular/core");
var Common = (function () {
    function Common() {
    }
    /** --------------------------------------------------------------------
     * This function allow you to replace any characters with Regular
     * Expressions Pattern.
     ----------------------------------------------------------------------*/
    Common.prototype.replaceCharacters = function (input, pattern) {
        return input.replace(pattern, '');
    };
    // Destructor
    Common.prototype.ngOnDestroy = function () { };
    return Common;
}());
Common = __decorate([
    core_1.Injectable()
], Common);
exports.Common = Common;
//# sourceMappingURL=Common.js.map