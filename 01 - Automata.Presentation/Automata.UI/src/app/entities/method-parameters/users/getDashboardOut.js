System.register(['../../../entities/entities.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var entities_module_1;
    var GetDashboardOut;
    return {
        setters:[
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            }],
        execute: function() {
            GetDashboardOut = (function (_super) {
                __extends(GetDashboardOut, _super);
                function GetDashboardOut() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(GetDashboardOut.prototype, "ProjectsCount", {
                    get: function () { return this._projectsCount; },
                    set: function (value) { this._projectsCount = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GetDashboardOut.prototype, "PagesCount", {
                    get: function () { return this._pagesCount; },
                    set: function (value) { this._pagesCount = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GetDashboardOut.prototype, "MethodsCount", {
                    get: function () { return this._methodsCount; },
                    set: function (value) { this._methodsCount = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GetDashboardOut.prototype, "TestsCount", {
                    get: function () { return this._testsCount; },
                    set: function (value) { this._testsCount = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GetDashboardOut.prototype, "SuitesCount", {
                    get: function () { return this._suitesCount; },
                    set: function (value) { this._suitesCount = value; },
                    enumerable: true,
                    configurable: true
                });
                return GetDashboardOut;
            }(entities_module_1.BaseMethodOut));
            exports_1("GetDashboardOut", GetDashboardOut);
        }
    }
});
//# sourceMappingURL=getDashboardOut.js.map