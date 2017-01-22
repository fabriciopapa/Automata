import { Component, ElementRef, EventEmitter, ViewChild } from 'angular2/core';
import { Router } from 'angular2/router';

import { UsersService, CommonService } from '../../../services/services.module';
import { LogInResultEvent, LogInIn, LogInOut, OperationResult, FrontEndPages, BaseMethodIn, BaseMethodOut } from '../../../entities/entities.module';
import { BaseComponent } from '../../components.module';

@Component({
    selector: 'logIn',
    outputs: ['onLogIn'],
    providers: [UsersService,
        CommonService
    ],
    templateUrl: 'app/components/common.UI/logIn/logIn.component.html',
    styleUrls: ['app/components/common.UI/logIn/logIn.component.css']
})

export class LogInComponent extends BaseComponent {
    private _onLogIn: EventEmitter<LogInResultEvent>;
    private _usersService: UsersService;
    private _commonService: CommonService;
    private _invalidCredentials: Boolean = false;
    private _requiredFieldsEntered: Boolean = true;
    protected _signInButtonDisabled: Boolean = false;
    protected _logInButtonDisabled: Boolean = false;
    
    @ViewChild('userName') protected _userName: ElementRef;
    @ViewChild('password') protected _password: ElementRef;

    get onLogIn(): EventEmitter<LogInResultEvent> { return this._onLogIn; }
    get invalidCredentials(): Boolean { return this._invalidCredentials; }
    get requiredFieldsEntered(): Boolean { return this._requiredFieldsEntered; }
    get logInButtonDisabled(): Boolean { return this._logInButtonDisabled; }
    get signInButtonDisabled(): Boolean { return this._signInButtonDisabled; }

    constructor(usersService: UsersService, commonService: CommonService) {
        super();
        this._onLogIn = new EventEmitter();
        this._usersService = usersService;
        this._commonService = commonService;
        this.pingServer();
    }
    
    protected pingServer() {
        let input: BaseMethodIn = new BaseMethodIn();
        this._commonService.pingServer(input).subscribe();
    }

    protected goToLogIn(): void {
        this.routerHelper.navigateTo(FrontEndPages.logIn);
    }

    protected goToHome(event?: any): void {
        this.routerHelper.navigateTo(FrontEndPages.home);
    }

    protected signIn(): void {
        this.navigateTo(FrontEndPages.signIn);
    }
    
    protected logIn(): void {
        if(!this._logInButtonDisabled){
            this._invalidCredentials = false;
            this._requiredFieldsEntered = this._userName.nativeElement.value != "" && this._password.nativeElement.value != "";
            if (this._requiredFieldsEntered) {
                this.switchButtons(false);
                let input: LogInIn = new LogInIn();
                input.UserName = this._userName.nativeElement.value;
                input.Password = this._password.nativeElement.value;
                this._usersService.logIn(input).subscribe(this.mapLogInResponse.bind(this), this.onLogInError.bind(this));
            }
        }
    }

    protected mapLogInResponse(result: LogInOut) {
        if (result.OperationResult == OperationResult.Success) {
            let logInResultEvent = new LogInResultEvent();
            logInResultEvent.result = result;
            if(result.User){
                this.contextInfo.user = result.User;
                this.contextInfo.userIsAuthenticated = true;
                this.goToHome();
            }
        }
        else {
            this.onLogInError();
        }
    }

    protected onLogInError(error?: any) {
        this._invalidCredentials = true;
        this.switchButtons(true);
    }

    protected switchButtons(enable: Boolean) {
        this._signInButtonDisabled = !enable;
        this._logInButtonDisabled = !enable;
    }
}