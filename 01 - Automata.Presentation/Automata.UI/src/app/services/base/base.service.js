System.register(["angular2/core", "angular2/http", 'rxjs/Rx', '../../configurationManager'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1, configurationManager_1;
    var BaseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (configurationManager_1_1) {
                configurationManager_1 = configurationManager_1_1;
            }],
        execute: function() {
            BaseService = (function () {
                function BaseService(http) {
                    this._http = http;
                }
                Object.defineProperty(BaseService.prototype, "Http", {
                    get: function () { return this._http; },
                    enumerable: true,
                    configurable: true
                });
                BaseService.prototype.executeGet = function (controller, operation, urlParameters) {
                    var input;
                    input = urlParameters.get("input");
                    var search = this.param(input);
                    var request;
                    request = new http_1.Request(new http_1.RequestOptions({
                        url: this.getUrl(controller, operation),
                        method: http_1.RequestMethod.Get,
                        search: search,
                        body: null
                    }));
                    return this._http.request(request).map(this.mapResponse.bind(this, request.url)).catch(this.handleError);
                };
                BaseService.prototype.mapResponse = function (url, response) {
                    var result = null;
                    var headerKey = this.getHeaderKey(response, "Content-Type");
                    if (response.status > 199 && response.status < 299) {
                        if (response.headers.get(headerKey).indexOf("application/json") > -1) {
                            result = response.json();
                        }
                        return result;
                    }
                };
                BaseService.prototype.handleError = function (error) {
                    var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
                    return Rx_1.Observable.throw(errMsg);
                };
                BaseService.prototype.getHeaderKey = function (response, headerKey) {
                    if (headerKey) {
                        if (response.headers.has(headerKey)) {
                            return headerKey;
                        }
                        if (response.headers.has(headerKey.toLowerCase())) {
                            return headerKey.toLowerCase();
                        }
                    }
                    return headerKey;
                };
                BaseService.prototype.param = function (a) {
                    var s;
                    var rbracket;
                    var isArray;
                    var add;
                    var buildParams;
                    var obj;
                    s = [], rbracket = /\[\]$/,
                        isArray = function (obj) {
                            return Object.prototype.toString.call(obj) === '[object Array]';
                        }, add = function (k, v) {
                        v = typeof v === 'function' ? '' : v === null ? '' : v === undefined ? '' : v;
                        s[s.length] = encodeURIComponent(k) + '=' + encodeURIComponent(v);
                    }, buildParams = function (prefix, obj) {
                        var i;
                        var len;
                        var key;
                        if (prefix) {
                            if (isArray(obj)) {
                                for (i = 0, len = obj.length; i < len; i++) {
                                    if (rbracket.test(prefix)) {
                                        add(prefix, obj[i]);
                                    }
                                    else {
                                        buildParams(prefix + '[' + (typeof obj[i] === 'object' ? i : '') + ']', obj[i]);
                                    }
                                }
                            }
                            else if (obj && String(obj) === '[object Object]') {
                                for (key in obj) {
                                    buildParams(prefix + '[' + key + ']', obj[key]);
                                }
                            }
                            else {
                                add(prefix, obj);
                            }
                        }
                        else if (isArray(obj)) {
                            for (i = 0, len = obj.length; i < len; i++) {
                                add(obj[i].name, obj[i].value);
                            }
                        }
                        else {
                            for (key in obj) {
                                buildParams(key, obj[key]);
                            }
                        }
                        return s;
                    };
                    return buildParams('', a).join('&').replace(/%20/g, '+');
                };
                BaseService.prototype.getUrl = function (controller, operation) {
                    return configurationManager_1.ConfigurationManager.Keys.WebApiBaseUrl + "/" + controller + "/" + operation;
                };
                BaseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BaseService);
                return BaseService;
            }());
            exports_1("BaseService", BaseService);
        }
    }
});
//# sourceMappingURL=base.service.js.map