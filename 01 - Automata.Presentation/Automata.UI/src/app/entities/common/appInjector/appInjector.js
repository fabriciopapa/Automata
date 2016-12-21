System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppInjector;
    return {
        setters:[],
        execute: function() {
            if (!window.icb) {
                window.icb = {
                    routerHelper: {},
                    unity: {},
                    appInjector: {}
                };
            }
            exports_1("AppInjector", AppInjector = function (injector) {
                if (injector) {
                    window.icb.appInjector.appInjectorReference = injector;
                }
                return window.icb.appInjector.appInjectorReference;
            });
        }
    }
});
//# sourceMappingURL=appInjector.js.map