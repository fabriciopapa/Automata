System.register(["angular2/core", 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var RouterHelperService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RouterHelperService = (function () {
                function RouterHelperService(router) {
                    if (!window.icb.routerHelper.router) {
                        window.icb.routerHelper.router = router;
                    }
                }
                Object.defineProperty(RouterHelperService.prototype, "router", {
                    get: function () {
                        return window.icb.routerHelper.router;
                    },
                    enumerable: true,
                    configurable: true
                });
                RouterHelperService.prototype.addConfiguration = function (definitions) {
                    window.icb.routerHelper.router.config(definitions);
                };
                RouterHelperService.prototype.navigateTo = function (page, linkParams) {
                    setTimeout(function () {
                        if (!window.icb.routerHelper.router.navigating) {
                            var navigateToPage = page.toString().charAt(0).toUpperCase() + page.toString().slice(1);
                            window.icb.routerHelper.router.navigate([navigateToPage, linkParams]);
                        }
                    }, 100);
                };
                RouterHelperService.prototype.navigateByUrl = function (url) {
                    setTimeout(function () {
                        if (!window.icb.routerHelper.router.navigating) {
                            window.icb.routerHelper.router.navigateByUrl(url);
                        }
                    }, 100);
                };
                RouterHelperService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], RouterHelperService);
                return RouterHelperService;
            }());
            exports_1("RouterHelperService", RouterHelperService);
        }
    }
});
//# sourceMappingURL=routerHelper.service.js.map