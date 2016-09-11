System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GetProjectsOut;
    return {
        setters:[],
        execute: function() {
            GetProjectsOut = (function () {
                function GetProjectsOut() {
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
            }());
            exports_1("GetProjectsOut", GetProjectsOut);
        }
    }
});
//# sourceMappingURL=getProjectsOut.js.map