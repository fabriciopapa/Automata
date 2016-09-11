import {Injectable}     from "angular2/core";
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
import {Observable} from 'rxjs/Rx';
import {ConfigurationManager} from '../../configurationManager'

@Injectable()
export class BaseService {
    private _http : Http;

    get Http() : Http { return this._http; }

    constructor(http: Http) {
        this._http = http;
    }

    public executeGet(controller: string, operation: string) : Observable<Response> {
        return this._http.get(`${ConfigurationManager.Keys.WebApiBaseUrl}/${controller}/${operation}`);
    }
}
