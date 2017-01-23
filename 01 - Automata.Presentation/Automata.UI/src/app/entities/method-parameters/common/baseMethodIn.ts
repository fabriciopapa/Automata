import { OperationResult } from '../../../entities/entities.module';

export class BaseMethodIn {
    private _userId: number;
    
    get UserId(): number { return this._userId; }
    set UserId(value: number) { this._userId = value; }
}