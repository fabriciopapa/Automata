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
                BaseService.prototype.executeGet = function (controller, operation) {
                    return this._http.get(configurationManager_1.ConfigurationManager.Keys.WebApiBaseUrl + "/" + controller + "/" + operation).catch(this.handleError);
                };
                BaseService.prototype.handleError = function (error) {
                    var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
                    return Rx_1.Observable.throw(errMsg);
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