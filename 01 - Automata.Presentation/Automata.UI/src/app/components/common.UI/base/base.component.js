System.register(['../../../configurationManager'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var configurationManager_1;
    var BaseComponent;
    return {
        setters:[
            function (configurationManager_1_1) {
                configurationManager_1 = configurationManager_1_1;
            }],
        execute: function() {
            BaseComponent = (function () {
                function BaseComponent() {
                }
                Object.defineProperty(BaseComponent.prototype, "ConfigurationManager", {
                    get: function () { return new configurationManager_1.ConfigurationManager(); },
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