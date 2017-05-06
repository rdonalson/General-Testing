/// ===========================================================================================
/// Initial Amount Service
/// ===========================================================================================
// Imports
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions,
    Request, RequestMethod, Headers
    } from "@angular/http";
// This service uses rxjs Observable or Observable
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { IInitialAmount } from "../Models/InitialAmount";

// This is marked Injectable because it will be
// consumed in the component class
@Injectable()
export class InitialAmountService {
    // This is the URL to the OData end point
    // When called from Area; Area name will be appended to beginning
    private initialAmountUrl;  

    // Pass the Http object to the class through the constructor
    constructor(private http: Http) {}

    // ** Get all InitialAmounts **
    getInitialAmounts(): Observable<IInitialAmount[]> {
        this.initialAmountUrl = "../odata/OdataInitialAmounts";
        return this.http.get(this.initialAmountUrl)
            .map((response: Response) => response.json().value as IInitialAmount[])
            /* Diagnostic */
            //.do(data => console.log("All: " + JSON.stringify(data)))
            .do(data => JSON.stringify(data))
            .catch(this.handleError);
    }

    // ** Get all InitialAmounts **
    getInitialAmount(id: number): Observable<IInitialAmount> {
        this.initialAmountUrl = '../odata/OdataInitialAmounts(' + id + ')';
        return this.http.get(this.initialAmountUrl)
            .map((response: Response) => response.json() as IInitialAmount)
            /* Diagnostic */
            .do(data => console.log("All: " + JSON.stringify(data)))
            //.do(data => JSON.stringify(data))
            .catch(this.handleError);
    }

    // ** Update a Product **
    updateInitialAmount(paramInitialAmount: IInitialAmount): Observable<void> {
        // This is a Put so we have to pass Headers
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
                    /* Diagnostic */
        console.log("paramInitialAmount: " + JSON.stringify(paramInitialAmount));
        // Make the Angular 2 Put
        return this.http.put(
            this.initialAmountUrl = '../odata/OdataInitialAmounts(' + paramInitialAmount.PkID + ')',
            JSON.stringify(paramInitialAmount), options)
            .catch(this.handleError);
    }

    // ** Called when there are any errors **
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }

}