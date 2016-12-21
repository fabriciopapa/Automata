import { OperationResult } from '../../../entities/entities.module';

export class BaseMethodOut {
    private _operationResult: OperationResult;

    get OperationResult(): OperationResult { return this._operationResult };
    set OperationResult(value: OperationResult) { this._operationResult = value };
}