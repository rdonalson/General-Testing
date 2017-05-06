import { Component, Input } from '@angular/core';
import { AlertModule } from "ng2-bootstrap/ng2-bootstrap";

@Component({
    selector: 'common-alert',
    template: `
    <div class="panel panel-danger" *ngIf="errorMessage">
        <alert type="info" >{{ errorMessage }}</alert>
    </div>
    `
})
export class AlertComponent {
    @Input() errorMessage: string;
}