import { Component, Input } from "@angular/core";
import { JsonrpcResponseError } from "src/app/shared/jsonrpc/base";

@Component({
    selector: 'oe-history-data-error',
    template: `
    <ion-item lines="full" color="warning" *ngIf="type !== null">
    <ion-icon size="large" slot="start" name="alert-circle-outline"></ion-icon>
    <ion-label class="ion-text-wrap" style="text-align: center">
        <ng-container [ngSwitch]="type">
            <span *ngSwitchCase="'TEMPORARY'" translate>Edge.Index.Energymonitor.ERROR_TEMPORARY</span>
        </ng-container>
    </ion-label>
</ion-item>`
})
export class HistoryDataErrorComponent {

    protected type: ErrorType;

    @Input()
    set response(response: JsonrpcResponseError | null) {
        this.type = toType(response);
    }
}

type ErrorType = 'TEMPORARY' | 'TOO_LONG' | null;

function toType(response: JsonrpcResponseError | null): ErrorType {
    let message = response?.error?.message;
    if (message === undefined) {
        return null;
    }
    switch (message) {
        default:
            return 'TEMPORARY';
    }
}
