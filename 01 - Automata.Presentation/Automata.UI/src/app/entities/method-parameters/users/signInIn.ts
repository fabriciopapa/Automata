import { BaseMethodIn } from '../../entities.module';

export class SignInIn extends BaseMethodIn {
    private _userName : string;
    private _password : string;
    private _name : string;
    private _lastName : string;
    private _secretAnswer : string;

    get UserName(): string { return this._userName; }
    set UserName(value: string) { this._userName = value; }

    get Password(): string { return this._password; }
    set Password(value: string) { this._password = value; }
        
    get Name(): string { return this._name; }
    set Name(value: string) { this._name = value; }

    get LastName(): string { return this._lastName; }
    set LastName(value: string) { this._lastName = value; }

    get SecretAnswer(): string { return this._secretAnswer; }
    set SecretAnswer(value: string) { this._secretAnswer = value; }
}