import { BaseMethodIn } from '../../entities.module';

export class LogOutIn extends BaseMethodIn {
    private _userId : number;

    get UserId(): number { return this._userId; }
    set UserId(value: number) { this._userId = value; }
}