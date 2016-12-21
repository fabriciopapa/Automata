System.register(['../../entities.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var entities_module_1;
    var LogInIn;
    return {
        setters:[
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            }],
        execute: function() {
            LogInIn = (function (_super) {
                __extends(LogInIn, _super);
                function LogInIn() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(LogInIn.prototype, "UserName", {
                    get: function () { return this._userName; },
                    set: function (value) { this._userName = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LogInIn.prototype, "Password", {
                    get: function () { return this._password; },
                    set: function (value) { this._password = value; },
                    enumerable: true,
                    configurable: true
                });
                return LogInIn;
            }(entities_module_1.BaseMethodIn));
            exports_1("LogInIn", LogInIn);
        }
    }
});
//# sourceMappingURL=logInIn.js.map