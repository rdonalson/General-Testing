/// ===========================================================================================
/// Tester Module
/// ===========================================================================================
// Imports
import { Injectable } from '@angular/core'

@Injectable()
export class Common {
    /** --------------------------------------------------------------------
     * This function allow you to replace any characters with Regular
     * Expressions Pattern.
     ----------------------------------------------------------------------*/
    replaceCharacters(input: string, pattern: RegExp): string {
        return input.replace(pattern, '');
    }

    // Destructor
    ngOnDestroy() {}
}

