import {Component, ElementRef, EventEmitter} from 'angular2/core';
import {Router} from 'angular2/router';
 
@Component({
    selector: 'error',
    inputs: ['errorMessage'],
    templateUrl: 'app/components/common.UI/error/error.component.html'
})
 
export class ErrorComponent {
    private _errorMessage: string;

    get errorMessage(): string{ return this._errorMessage; }
    set errorMessage(value: string) { this._errorMessage = value; }

    constructor() {
        this._errorMessage = '';
    }
}