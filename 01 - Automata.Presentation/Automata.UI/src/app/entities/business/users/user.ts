import { Project, Assembly } from '../../entities.module';

export class User
{
    private _pk_Id : number;
    private _userName: string;
    private _password: string;
    private _name: string;
    private _lastName: string;
    private _secretAnswer: string;
    private _active: boolean;
    private _assemblies: Assembly[];
    private _projects: Project[];

    get PK_Id(): number { return this._pk_Id; }
    set PK_Id(value: number) { this._pk_Id = value; }

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

    get Active(): boolean { return this._active; }
    set Active(value: boolean) { this._active = value; }

    get Assemblies(): Assembly[] { return this._assemblies; }
    set Assemblies(value: Assembly[]) { this._assemblies = value; }

    get Projects(): Project[] { return this._projects; }
    set Projects(value: Project[]) { this._projects = value; }

    // constructor (pk_Id: number, userName: string, password: string, name: string, lastName: string, secretAnswer: string, active: boolean, assemblies: Assembly[], projects: Project[]) {
    //     this._pk_Id = pk_Id;
    //     this._userName = userName;
    //     this._password = password;
    //     this._name = name;
    //     this._lastName = lastName;
    //     this._secretAnswer = secretAnswer;
    //     this._active = active;
    //     this._assemblies = assemblies;
    //     this._projects = projects;
    // }
}
