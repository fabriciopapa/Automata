System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Project;
    return {
        setters:[],
        execute: function() {
            Project = (function () {
                function Project(id, name, url) {
                    this._id = id;
                    this._name = name;
                    this._url = url;
                }
                Object.defineProperty(Project.prototype, "Id", {
                    get: function () { return this._id; },
                    set: function (value) { this._id = value; },
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
                return Project;
            }());
            exports_1("Project", Project);
        }
    }
});
//# sourceMappingURL=project.js.map