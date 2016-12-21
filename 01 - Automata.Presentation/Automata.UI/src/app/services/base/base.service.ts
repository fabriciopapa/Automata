import { Injectable } from "angular2/core";
import { Http, Response, HTTP_PROVIDERS, URLSearchParams, Request, RequestOptions, RequestMethod } from "angular2/http";
import { Observable } from 'rxjs/Rx';
import { ConfigurationManager } from '../../configurationManager'
import { Dictionary } from '../../entities/entities.module';

@Injectable()
export class BaseService {
    private _http: Http;

    get Http(): Http { return this._http; }

    constructor(http: Http) {
        this._http = http;
    }

    public executeGet(controller: string, operation: string, urlParameters: any): Observable<Response> {
        let input: any;
        input = urlParameters.get("input");

        let search = this.param(input);
        let request: Request;
        request = new Request(new RequestOptions({
            url: this.getUrl(controller, operation),
            method: RequestMethod.Get,
            search: search,
            body: null
        }));
        
        return this._http.request(request).map(this.mapResponse.bind(this, request.url)).catch(this.handleError);
    }

    protected mapResponse(url: string, response: Response) {
        let result: any = null;
        let headerKey : string = this.getHeaderKey(response, "Content-Type");
        if (response.status > 199 && response.status < 299) {
            if (response.headers.get(headerKey).indexOf("application/json") > -1) {
                result = response.json();
            }
            return result;
        }
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

    protected getHeaderKey(response: Response , headerKey: string): string {
        if(headerKey){
            if(response.headers.has(headerKey)){
                return headerKey;
            }
            if(response.headers.has(headerKey.toLowerCase())){
                return headerKey.toLowerCase();
            }
        }
        return headerKey;
    }

    protected param(a: any) {
        let s: any;
        let rbracket: any;
        let isArray: any;
        let add: any;
        let buildParams: any;

        let obj: any;

        s = [], rbracket = /\[\]$/,
            isArray = function (obj: any) {
                return Object.prototype.toString.call(obj) === '[object Array]';
            }, add = function (k: any, v: any) {
            v = typeof v === 'function' ? '' : v === null ? '' : v === undefined ? '' : v;
            s[s.length] = encodeURIComponent(k) + '=' + encodeURIComponent(v);
        }, buildParams = function (prefix: any, obj: any) {
            let i: any;
            let len: any;
            let key: any;
            if (prefix) {
                if (isArray(obj)) {
                    for (i = 0, len = obj.length; i < len; i++) {
                        if (rbracket.test(prefix)) {
                            add(prefix, obj[i]);
                        } else {
                            buildParams(prefix + '[' + (typeof obj[i] === 'object' ? i : '') + ']', obj[i]);
                        }
                    }
                } else if (obj && String(obj) === '[object Object]') {
                    for (key in obj) {
                        buildParams(prefix + '[' + key + ']', obj[key]);
                    }
                } else {
                    add(prefix, obj);
                }
            } else if (isArray(obj)) {
                for (i = 0, len = obj.length; i < len; i++) {
                    add(obj[i].name, obj[i].value);
                }
            } else {
                for (key in obj) {
                    buildParams(key, obj[key]);
                }
            }
            return s;
        };
        return buildParams('', a).join('&').replace(/%20/g, '+');
    }

    protected getUrl(controller: string, operation: string): string{
        return `${ConfigurationManager.Keys.WebApiBaseUrl}/${controller}/${operation}`
    }
}
