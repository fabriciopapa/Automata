System.register(['../../../entities/entities.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var entities_module_1;
    var LogInOut;
    return {
        setters:[
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            }],
        execute: function() {
            LogInOut = (function (_super) {
                __extends(LogInOut, _super);
                function LogInOut() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(LogInOut.prototype, "User", {
                    get: function () { return this._user; },
                    set: function (value) { this._user = value; },
                    enumerable: true,
                    configurable: true
                });
                return LogInOut;
            }(entities_module_1.BaseMethodOut));
            exports_1("LogInOut", LogInOut);
        }
    }
});
//# sourceMappingURL=logInOut.js.map