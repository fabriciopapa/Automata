System.register(['../../../appConfig'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var appConfig_1;
    var BaseComponent;
    return {
        setters:[
            function (appConfig_1_1) {
                appConfig_1 = appConfig_1_1;
            }],
        execute: function() {
            BaseComponent = (function () {
                function BaseComponent() {
                    this._appConfig = new appConfig_1.AppConfig();
                }
                Object.defineProperty(BaseComponent.prototype, "AppConfig", {
                    get: function () { return this._appConfig; },
                    enumerable: true,
                    configurable: true
                });
                return BaseComponent;
            }());
            exports_1("BaseComponent", BaseComponent);
        }
    }
});
//# sourceMappingURL=base.component.js.map