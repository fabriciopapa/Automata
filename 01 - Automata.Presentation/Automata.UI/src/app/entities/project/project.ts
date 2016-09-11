export class Project
{
    private _id : number;
    private _name: string;
    private _url: string;

    get Id(): number { return this._id; }
    set Id(value: number) { this._id = value; }

    get Name(): string { return this._name; }
    set Name(value: string) { this._name = value; }

    get Url(): string { return this._url; }
    set Url(value: string) { this._url = value; }

    constructor (id?: number, name?: string, url?: string) {
        this._id = id;
        this._name = name;
        this._url = url;
    }
}
