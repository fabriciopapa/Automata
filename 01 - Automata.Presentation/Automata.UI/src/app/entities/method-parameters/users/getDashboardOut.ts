import { BaseMethodOut } from '../../../entities/entities.module';

export class GetDashboardOut extends BaseMethodOut {
    private _projectsCount : number;
    private _pagesCount : number;
    private _methodsCount : number;
    private _testsCount : number;
    private _suitesCount : number;

    get ProjectsCount(): number { return this._projectsCount; }
    set ProjectsCount(value: number) { this._projectsCount = value; }

    get PagesCount(): number { return this._pagesCount; }
    set PagesCount(value: number) { this._pagesCount = value; }

    get MethodsCount(): number { return this._methodsCount; }
    set MethodsCount(value: number) { this._methodsCount = value; }

    get TestsCount(): number { return this._testsCount; }
    set TestsCount(value: number) { this._testsCount = value; }

    get SuitesCount(): number { return this._suitesCount; }
    set SuitesCount(value: number) { this._suitesCount = value; }
}