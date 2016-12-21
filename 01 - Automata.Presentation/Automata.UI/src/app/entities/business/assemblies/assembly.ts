export class Assembly {

    private _pk_Id : number;
    private _name: string;
    private _code: string;
    private _public: boolean;
    private _active: boolean;

    get PK_Id(): number { return this._pk_Id; }
    set PK_Id(value: number) { this._pk_Id = value; }
    
    get Name(): string { return this._name; }
    set Name(value: string) { this._name = value; }

    get Code(): string { return this._code; }
    set Code(value: string) { this._code = value; }

    get Public(): boolean { return this._public; }
    set Public(value: boolean) { this._public = value; }

    get Active(): boolean { return this._active; }
    set Active(value: boolean) { this._active = value; }

    // constructor (pk_Id: number, name: string, code: string, isPublic: boolean, active: boolean) {
    //     this._pk_Id = pk_Id;
    //     this._name = name;
    //     this._code = code;
    //     this._public = isPublic;
    //     this._active = active;
    // }
}