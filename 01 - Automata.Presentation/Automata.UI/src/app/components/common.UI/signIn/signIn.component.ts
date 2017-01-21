import { Component, ElementRef, EventEmitter, ViewChild } from 'angular2/core';
import { Router } from 'angular2/router';

import { SignInResultEvent, SignInIn, SignInOut, OperationResult, FrontEndPages } from '../../../entities/entities.module';
import { UsersService } from '../../../services/services.module';
import { BaseComponent } from '../../components.module';

@Component({
    selector: 'signIn',
    outputs: ['onSignIn'],
    providers: [UsersService],
    templateUrl: 'app/components/common.UI/signIn/signIn.component.html',
    styleUrls: ['app/components/common.UI/signIn/signIn.component.css']
})

export class SignInComponent extends BaseComponent {
    private _onSignIn: EventEmitter<SignInResultEvent>;
    private _usersService: UsersService;
    private _invalidCredentials: Boolean = false;
    private _requiredFieldsEntered: Boolean = true;

    @ViewChild('userName') protected _userName: ElementRef;
    @ViewChild('password') protected _password: ElementRef;
    @ViewChild('name') protected _name: ElementRef;
    @ViewChild('lastName') protected _lastName: ElementRef;
    @ViewChild('secretAnswer') protected _secretAnswer: ElementRef;

    get onSignIn(): EventEmitter<SignInResultEvent> { return this._onSignIn; }
    get invalidCredentials(): Boolean { return this._invalidCredentials; }
    get requiredFieldsEntered(): Boolean { return this._requiredFieldsEntered; }

    constructor(usersService: UsersService) {
        super();
        this._onSignIn = new EventEmitter();
        this._usersService = usersService;
    }

    protected signIn(): void {
        this._requiredFieldsEntered = this._userName.nativeElement.value != '' && 
                                         this._password.nativeElement.value != '' && 
                                         this._name.nativeElement.value != '' &&
                                         this._lastName.nativeElement.value != '' &&
                                         this._secretAnswer.nativeElement.value != '';
        if(!this._requiredFieldsEntered){
            let input: SignInIn = new SignInIn();
            input.UserName = this._userName.nativeElement.value;
            input.Password = this._password.nativeElement.value;
            input.Name = this._name.nativeElement.value;
            input.LastName = this._lastName.nativeElement.value;
            input.SecretAnswer = this._secretAnswer.nativeElement.value;
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
    
    protected goToLogIn(): void {
        this.routerHelper.navigateTo(FrontEndPages.logIn);
    }
}