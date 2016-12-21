System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ConfigurationManager;
    return {
        setters:[],
        execute: function() {
            ConfigurationManager = (function () {
                function ConfigurationManager() {
                }
                Object.defineProperty(ConfigurationManager, "Keys", {
                    get: function () {
                        return {
                            WebApiBaseUrl: "http://localhost:8181/api"
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return ConfigurationManager;
            }());
            exports_1("ConfigurationManager", ConfigurationManager);
        }
    }
});
//# sourceMappingURL=configurationManager.js.map