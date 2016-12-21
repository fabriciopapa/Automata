System.register(['../../entities.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var entities_module_1;
    var LogOutIn;
    return {
        setters:[
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            }],
        execute: function() {
            LogOutIn = (function (_super) {
                __extends(LogOutIn, _super);
                function LogOutIn() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(LogOutIn.prototype, "UserId", {
                    get: function () { return this._userId; },
                    set: function (value) { this._userId = value; },
                    enumerable: true,
                    configurable: true
                });
                return LogOutIn;
            }(entities_module_1.BaseMethodIn));
            exports_1("LogOutIn", LogOutIn);
        }
    }
});
//# sourceMappingURL=logOutIn.js.map