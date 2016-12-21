import { BaseMethodIn } from '../../entities.module';

export class LogInIn extends BaseMethodIn {
    private _userName : string;
    private _password : string;

    get UserName(): string { return this._userName; }
    set UserName(value: string) { this._userName = value; }

    get Password(): string { return this._password; }
    set Password(value: string) { this._password = value; }
}