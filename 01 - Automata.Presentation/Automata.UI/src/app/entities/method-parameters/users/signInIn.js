System.register(['../../entities.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var entities_module_1;
    var SignInIn;
    return {
        setters:[
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            }],
        execute: function() {
            SignInIn = (function (_super) {
                __extends(SignInIn, _super);
                function SignInIn() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(SignInIn.prototype, "UserName", {
                    get: function () { return this._userName; },
                    set: function (value) { this._userName = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignInIn.prototype, "Password", {
                    get: function () { return this._password; },
                    set: function (value) { this._password = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignInIn.prototype, "Name", {
                    get: function () { return this._name; },
                    set: function (value) { this._name = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignInIn.prototype, "LastName", {
                    get: function () { return this._lastName; },
                    set: function (value) { this._lastName = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignInIn.prototype, "SecretAnswer", {
                    get: function () { return this._secretAnswer; },
                    set: function (value) { this._secretAnswer = value; },
                    enumerable: true,
                    configurable: true
                });
                return SignInIn;
            }(entities_module_1.BaseMethodIn));
            exports_1("SignInIn", SignInIn);
        }
    }
});
//# sourceMappingURL=signInIn.js.map