import {Component, ElementRef, EventEmitter} from 'angular2/core';
import {Router} from 'angular2/router';

import {LoginResultEvent} from '../../../classes/classes.module';
 
@Component({
    selector: 'login',
    outputs: ['onLogin'],
    templateUrl: 'app/components/common.UI/login/login.component.html',
    styleUrls: ['app/components/common.UI/login/login.component.css']
})
 
export class LoginComponent {
    private _onLogin: EventEmitter<LoginResultEvent>;

    get onLogin(): EventEmitter<LoginResultEvent> { return this._onLogin; }

    constructor() {
        this._onLogin = new EventEmitter();
    }
 
    protected login(): void {
        let loginResultEvent = new LoginResultEvent();
        loginResultEvent.result = true;
        loginResultEvent.user = 'user';
        loginResultEvent.password = 'password';
        this._onLogin.emit(loginResultEvent);
    }
}