System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Project;
    return {
        setters:[],
        execute: function() {
            Project = (function () {
                function Project() {
                }
                Object.defineProperty(Project.prototype, "PK_Id", {
                    get: function () { return this._pk_Id; },
                    set: function (value) { this._pk_Id = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Project.prototype, "Name", {
                    get: function () { return this._name; },
                    set: function (value) { this._name = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Project.prototype, "Url", {
                    get: function () { return this._url; },
                    set: function (value) { this._url = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Project.prototype, "Active", {
                    get: function () { return this._active; },
                    set: function (value) { this._active = value; },
                    enumerable: true,
                    configurable: true
                });
                return Project;
            }());
            exports_1("Project", Project);
        }
    }
});
//# sourceMappingURL=project.js.map