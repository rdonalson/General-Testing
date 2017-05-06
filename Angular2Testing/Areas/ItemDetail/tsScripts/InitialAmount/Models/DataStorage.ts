/// ===========================================================================================
/// Initial Amount Service
/// ===========================================================================================
// Imports
import { Injectable } from '@angular/core';

@Injectable()
export class DataStorage {
    public refresh: boolean;
    public constructor() {
        this.refresh = false;
    }
}