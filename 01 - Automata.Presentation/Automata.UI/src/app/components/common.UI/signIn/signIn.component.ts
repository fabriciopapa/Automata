import { Component, ElementRef, EventEmitter, ViewChild } from 'angular2/core';
import { Router } from 'angular2/router';

import { SignInResultEvent, SignInIn, SignInOut, OperationResult } from '../../../entities/entities.module';
import { UsersService } from '../../../services/services.module';

@Component({
    selector: 'signIn',
    outputs: ['onSignIn'],
    providers: [UsersService],
    templateUrl: 'app/components/common.UI/signIn/signIn.component.html',
    styleUrls: ['app/components/common.UI/signIn/signIn.component.css']
})

export class SignInComponent {
    private _onSignIn: EventEmitter<SignInResultEvent>;
    private _usersService: UsersService;
    private _invalidCredentials: Boolean = false;
    private _requiredFieldsNotEntered: Boolean = false;
    @ViewChild('userName') protected _userName: ElementRef;
    @ViewChild('password') protected _password: ElementRef;

    get onSignIn(): EventEmitter<SignInResultEvent> { return this._onSignIn; }

    constructor(usersService: UsersService) {
        this._onSignIn = new EventEmitter();
        this._usersService = usersService;
    }

    protected signIn(): void {
        this._requiredFieldsNotEntered = this._userName.nativeElement.value != '' && 
                                         this._password.nativeElement.value != '';
        if(!this._requiredFieldsNotEntered){
            let input: SignInIn = new SignInIn();
            input.UserName = this._userName.nativeElement.value;
            input.Password = this._password.nativeElement.value;
            this._usersService.signIn(input).subscribe(this.mapSignInResponse.bind(this), this.onSignInError.bind(this));
        }
    }

    protected mapSignInResponse(result: SignInOut){
        if(result.OperationResult == OperationResult.Success){
            let signInResultEvent = new SignInResultEvent();
            signInResultEvent.result = result;
            this._onSignIn.emit(signInResultEvent);
        }
        else{
            this._invalidCredentials = true;
        }
    }

    protected onSignInError(error: any){
        this._invalidCredentials = true;
    }
}