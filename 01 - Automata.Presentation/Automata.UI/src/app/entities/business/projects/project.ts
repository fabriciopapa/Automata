export class Project
{
    private _pk_Id : number;
    private _name: string;
    private _url: string;
    private _active: boolean;

    get PK_Id(): number { return this._pk_Id; }
    set PK_Id(value: number) { this._pk_Id = value; }

    get Name(): string { return this._name; }
    set Name(value: string) { this._name = value; }

    get Url(): string { return this._url; }
    set Url(value: string) { this._url = value; }
    
    get Active(): boolean { return this._active; }
    set Active(value: boolean) { this._active = value; }

    // constructor (pk_Id: number, name: string, url: string, active: boolean) {
    //     this._pk_Id = pk_Id;
    //     this._name = name;
    //     this._url = url;
    //     this._active = active;
    // }
}
