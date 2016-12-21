import { Component, ElementRef, EventEmitter, ViewChild } from 'angular2/core';
import { Router } from 'angular2/router';

import { UsersService } from '../../../services/services.module';
import { LogInResultEvent, LogInIn, LogInOut, OperationResult, FrontEndPages } from '../../../entities/entities.module';
import { BaseComponent } from '../../components.module';

@Component({
    selector: 'logIn',
    outputs: ['onLogIn'],
    providers: [UsersService],
    templateUrl: 'app/components/common.UI/logIn/logIn.component.html',
    styleUrls: ['app/components/common.UI/logIn/logIn.component.css']
})

export class LogInComponent extends BaseComponent {
    private _onLogIn: EventEmitter<LogInResultEvent>;
    private _usersService: UsersService;
    private _invalidCredentials: Boolean = false;
    private _requiredFieldsEntered: Boolean = true;
    @ViewChild('userName') protected _userName: ElementRef;
    @ViewChild('password') protected _password: ElementRef;

    get onLogIn(): EventEmitter<LogInResultEvent> { return this._onLogIn; }
    get invalidCredentials(): Boolean { return this._invalidCredentials; }
    get requiredFieldsEntered(): Boolean { return this._requiredFieldsEntered; }

    constructor(usersService: UsersService) {
        super();
        this._onLogIn = new EventEmitter();
        this._usersService = usersService;
    }

    protected goToLogIn(): void {
        this.routerHelper.navigateTo(FrontEndPages.logIn);
    }

    protected goToHome(event?: any): void {
        this.contextInfo.userIsAuthenticated = true;
        this.routerHelper.navigateTo(FrontEndPages.home);
    }
    
    protected logIn(): void {
        this._invalidCredentials = false;
        this._requiredFieldsEntered = this._userName.nativeElement.value != "" && this._password.nativeElement.value != "";
        if (this._requiredFieldsEntered) {
            let input: LogInIn = new LogInIn();
            input.UserName = this._userName.nativeElement.value;
            input.Password = this._password.nativeElement.value;
            this._usersService.logIn(input).subscribe(this.mapLogInResponse.bind(this), this.onLogInError.bind(this));
        }
    }

    protected mapLogInResponse(result: LogInOut) {
        if (result.OperationResult == OperationResult.Success) {
            let logInResultEvent = new LogInResultEvent();
            logInResultEvent.result = result;
            if(result.User){
                this.contextInfo.user = result.User;
                this.goToHome();
            }
        }
        else {
            this._invalidCredentials = true;
        }
    }

    protected onLogInError(error: any) {
        this._invalidCredentials = true;
    }

    protected signIn(): void {
        this.routerHelper.navigateTo(FrontEndPages.signIn);
    }
}