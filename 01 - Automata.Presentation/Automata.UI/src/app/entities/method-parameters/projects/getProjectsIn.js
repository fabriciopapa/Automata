System.register(['../../entities.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var entities_module_1;
    var GetProjectsIn;
    return {
        setters:[
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            }],
        execute: function() {
            GetProjectsIn = (function (_super) {
                __extends(GetProjectsIn, _super);
                function GetProjectsIn() {
                    _super.apply(this, arguments);
                }
                return GetProjectsIn;
            }(entities_module_1.BaseMethodIn));
            exports_1("GetProjectsIn", GetProjectsIn);
        }
    }
});
//# sourceMappingURL=getProjectsIn.js.map