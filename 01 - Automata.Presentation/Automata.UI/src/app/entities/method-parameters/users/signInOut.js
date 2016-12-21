System.register(['../../../entities/entities.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var entities_module_1;
    var SignInOut;
    return {
        setters:[
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            }],
        execute: function() {
            SignInOut = (function (_super) {
                __extends(SignInOut, _super);
                function SignInOut() {
                    _super.apply(this, arguments);
                }
                return SignInOut;
            }(entities_module_1.BaseMethodOut));
            exports_1("SignInOut", SignInOut);
        }
    }
});
//# sourceMappingURL=signInOut.js.map