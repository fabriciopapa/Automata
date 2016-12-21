System.register(['../../../configurationManager', '../../../services/services.module', '../../../entities/entities.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var configurationManager_1, services_module_1, entities_module_1;
    var BaseComponent;
    return {
        setters:[
            function (configurationManager_1_1) {
                configurationManager_1 = configurationManager_1_1;
            },
            function (services_module_1_1) {
                services_module_1 = services_module_1_1;
            },
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            }],
        execute: function() {
            BaseComponent = (function () {
                function BaseComponent() {
                }
                Object.defineProperty(BaseComponent.prototype, "routerHelper", {
                    get: function () {
                        if (!this._routerHelper) {
                            this._routerHelper = entities_module_1.AppInjector().get(services_module_1.RouterHelperService);
                        }
                        return this._routerHelper;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseComponent.prototype, "configurationManager", {
                    get: function () {
                        if (!this._configurationManager) {
                            this._configurationManager = new configurationManager_1.ConfigurationManager();
                        }
                        return this._configurationManager;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseComponent.prototype, "contextInfo", {
                    get: function () {
                        if (!this._contextInfo) {
                            this._contextInfo = entities_module_1.AppInjector().get(services_module_1.ContextInfoService);
                        }
                        return this._contextInfo;
                    },
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