System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                }
                Object.defineProperty(User.prototype, "PK_Id", {
                    get: function () { return this._pk_Id; },
                    set: function (value) { this._pk_Id = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "UserName", {
                    get: function () { return this._userName; },
                    set: function (value) { this._userName = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "Password", {
                    get: function () { return this._password; },
                    set: function (value) { this._password = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "Name", {
                    get: function () { return this._name; },
                    set: function (value) { this._name = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "LastName", {
                    get: function () { return this._lastName; },
                    set: function (value) { this._lastName = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "SecretAnswer", {
                    get: function () { return this._secretAnswer; },
                    set: function (value) { this._secretAnswer = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "Active", {
                    get: function () { return this._active; },
                    set: function (value) { this._active = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "Assemblies", {
                    get: function () { return this._assemblies; },
                    set: function (value) { this._assemblies = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "Projects", {
                    get: function () { return this._projects; },
                    set: function (value) { this._projects = value; },
                    enumerable: true,
                    configurable: true
                });
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map