System.register(['../../entities.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var entities_module_1;
    var GetProjectsOut;
    return {
        setters:[
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            }],
        execute: function() {
            GetProjectsOut = (function (_super) {
                __extends(GetProjectsOut, _super);
                function GetProjectsOut() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(GetProjectsOut.prototype, "Projects", {
                    get: function () { return this._projects; },
                    set: function (value) { this._projects = value; },
                    enumerable: true,
                    configurable: true
                });
                GetProjectsOut.prototype.GetProjectsOut = function () {
                    this._projects = [];
                };
                return GetProjectsOut;
            }(entities_module_1.BaseMethodOut));
            exports_1("GetProjectsOut", GetProjectsOut);
        }
    }
});
//# sourceMappingURL=getProjectsOut.js.map