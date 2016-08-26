System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppConfig;
    return {
        setters:[],
        execute: function() {
            AppConfig = (function () {
                function AppConfig() {
                    this._webApiPath = 'http://192.168.1.43:8080/api/';
                }
                Object.defineProperty(AppConfig.prototype, "WebApiPath", {
                    get: function () {
                        return this._webApiPath;
                    },
                    enumerable: true,
                    configurable: true
                });
                return AppConfig;
            }());
            exports_1("AppConfig", AppConfig);
        }
    }
});
//# sourceMappingURL=appConfig.js.map