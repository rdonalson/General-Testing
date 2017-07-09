"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
///---------------------------------------
///
///------------------------------------
var core_1 = require("@angular/core");
var NgbdDatepickerPopup = (function () {
    function NgbdDatepickerPopup() {
    }
    return NgbdDatepickerPopup;
}());
NgbdDatepickerPopup = __decorate([
    core_1.Component({
        selector: 'ngbd-datepicker-popup',
        template: "\n<form class=\"form-inline\">\n    <div class=\"form-group\">\n        <div class=\"input-group\">\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                   name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n            <div class=\"input-group-addon\" (click)=\"d.toggle()\">\n                <!--<img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />-->\n                <span class=\"glyphicon glyphicon-calendar\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"></span>\n            </div>\n        </div>\n    </div>\n</form>\n<hr />\n<pre>Model: {{ model | json }}</pre>\n"
        //templateUrl: '../../../../tsScripts/Shared/Common/Datepicker-popup.html'
    })
], NgbdDatepickerPopup);
exports.NgbdDatepickerPopup = NgbdDatepickerPopup;
//# sourceMappingURL=Datepicker-popup.js.map