import { User, BaseMethodOut } from '../../../entities/entities.module';

export class LogInOut extends BaseMethodOut {
    private _user : User;

    get User(): User { return this._user; }
    set User(value: User) { this._user = value; }
}