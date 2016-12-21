System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Assembly;
    return {
        setters:[],
        execute: function() {
            Assembly = (function () {
                function Assembly() {
                }
                Object.defineProperty(Assembly.prototype, "PK_Id", {
                    get: function () { return this._pk_Id; },
                    set: function (value) { this._pk_Id = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Assembly.prototype, "Name", {
                    get: function () { return this._name; },
                    set: function (value) { this._name = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Assembly.prototype, "Code", {
                    get: function () { return this._code; },
                    set: function (value) { this._code = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Assembly.prototype, "Public", {
                    get: function () { return this._public; },
                    set: function (value) { this._public = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Assembly.prototype, "Active", {
                    get: function () { return this._active; },
                    set: function (value) { this._active = value; },
                    enumerable: true,
                    configurable: true
                });
                return Assembly;
            }());
            exports_1("Assembly", Assembly);
        }
    }
});
//# sourceMappingURL=assembly.js.map