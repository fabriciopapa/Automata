System.register(['angular2/core', '../../../entities/entities.module'], function(exports_1, context_1) {
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
    var core_1, entities_module_1;
    var ContextInfoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            }],
        execute: function() {
            ContextInfoService = (function () {
                function ContextInfoService() {
                }
                Object.defineProperty(ContextInfoService.prototype, "user", {
                    get: function () {
                        return ContextInfoService._user;
                    },
                    set: function (user) {
                        ContextInfoService._user = user;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ContextInfoService.prototype, "userIsAuthenticated", {
                    get: function () {
                        return ContextInfoService._userIsAuthenticated;
                    },
                    set: function (value) {
                        ContextInfoService._userIsAuthenticated = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ContextInfoService.prototype, "isLoading", {
                    get: function () {
                        return ContextInfoService._isLoading;
                    },
                    set: function (value) {
                        ContextInfoService._isLoading = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ContextInfoService.prototype, "dashboardOption", {
                    get: function () {
                        return ContextInfoService._dashboardOption;
                    },
                    set: function (value) {
                        ContextInfoService._dashboardOption = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                ContextInfoService._dashboardOption = entities_module_1.FrontEndPages.home.toString();
                ContextInfoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContextInfoService);
                return ContextInfoService;
            }());
            exports_1("ContextInfoService", ContextInfoService);
        }
    }
});
//# sourceMappingURL=contextInfo.service.js.map