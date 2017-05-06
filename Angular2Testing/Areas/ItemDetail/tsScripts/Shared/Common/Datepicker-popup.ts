﻿///---------------------------------------
///
///------------------------------------
import { Component } from '@angular/core';

@Component({
    selector: 'ngbd-datepicker-popup',
    template: `
<form class="form-inline">
    <div class="form-group">
        <div class="input-group">
            <input class="form-control" placeholder="yyyy-mm-dd"
                   name="dp" [(ngModel)]="model" ngbDatepicker #d="ngbDatepicker">
            <div class="input-group-addon" (click)="d.toggle()">
                <!--<img src="img/calendar-icon.svg" style="width: 1.2rem; height: 1rem; cursor: pointer;" />-->
                <span class="glyphicon glyphicon-calendar" style="width: 1.2rem; height: 1rem; cursor: pointer;"></span>
            </div>
        </div>
    </div>
</form>
<hr />
<pre>Model: {{ model | json }}</pre>
`
    //templateUrl: '../../../../tsScripts/Shared/Common/Datepicker-popup.html'
})
export class NgbdDatepickerPopup {
    model;
}
