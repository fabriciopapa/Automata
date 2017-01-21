System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppInjector;
    return {
        setters:[],
        execute: function() {
            if (!window.automata) {
                window.automata = {
                    routerHelper: {},
                    appInjector: {}
                };
            }
            exports_1("AppInjector", AppInjector = function (injector) {
                if (injector) {
                    window.automata.appInjector.appInjectorReference = injector;
                }
                return window.automata.appInjector.appInjectorReference;
            });
        }
    }
});
//# sourceMappingURL=appInjector.js.map