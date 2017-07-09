import { Component, Input } from '@angular/core';

@Component({
    selector: 'common-alert',
    template: 
`<div class="panel panel-danger" *ngIf="errorMessage">
    <alert type="danger" >{{ errorMessage }}</alert>
</div>`
})
export class AlertComponent {
    @Input() errorMessage: string;
}