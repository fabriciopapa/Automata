export class AppConfig {

    private _webApiPath = 'http://192.168.1.43:8080/api/';

    get WebApiPath():string {
        return this._webApiPath;
    }

    constructor() { }
}
