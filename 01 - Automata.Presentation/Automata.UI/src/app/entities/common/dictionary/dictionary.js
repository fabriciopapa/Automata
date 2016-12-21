System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Dictionary;
    return {
        setters:[],
        execute: function() {
            Dictionary = (function () {
                function Dictionary() {
                    this.isDictionary = true;
                    this._keys = [];
                }
                Dictionary.prototype.add = function (key, value) {
                    var stringKey = this.createStringKey(key);
                    if (this.hasKey(key)) {
                        var error = "An element with the key '" + stringKey + "' already exists in the dictionary";
                        throw error;
                    }
                    else {
                        this[stringKey] = value;
                        this._keys.push(key);
                    }
                };
                Dictionary.prototype.updateValue = function (key, value) {
                    var stringKey = this.createStringKey(key);
                    if (!this.hasKey(key)) {
                        var error = "An element with the key '" + stringKey + "' does not exists in the dictionary";
                        throw error;
                    }
                    else {
                        this[stringKey] = value;
                    }
                };
                Dictionary.prototype.get = function (key) {
                    return this[this.createStringKey(key)];
                };
                Dictionary.prototype.hasKey = function (key) {
                    return this.hasOwnProperty(this.createStringKey(key));
                };
                Dictionary.prototype.remove = function (key) {
                    var stringKey = this.createStringKey(key);
                    this[stringKey] = undefined;
                    delete this[stringKey];
                    var index = this._keys.indexOf(key);
                    if (index > -1) {
                        this._keys.splice(index, 1);
                    }
                };
                Dictionary.prototype.keys = function () {
                    return this._keys;
                };
                Dictionary.prototype.count = function () {
                    return this._keys.length;
                };
                Dictionary.prototype.createStringKey = function (key) {
                    var stringKey;
                    if (typeof (key) === "string") {
                        stringKey = key;
                    }
                    else {
                        stringKey = JSON.stringify(key);
                    }
                    if (stringKey === "_keys") {
                        throw "The key '_keys' is a reserved word and can not be used as a dictionary's key.";
                    }
                    return stringKey.toString();
                };
                return Dictionary;
            }());
            exports_1("Dictionary", Dictionary);
        }
    }
});
//# sourceMappingURL=dictionary.js.map