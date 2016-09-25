System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ErrorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ErrorComponent = (function () {
                function ErrorComponent() {
                    this._errorMessage = '';
                }
                Object.defineProperty(ErrorComponent.prototype, "errorMessage", {
                    get: function () { return this._errorMessage; },
                    set: function (value) { this._errorMessage = value; },
                    enumerable: true,
                    configurable: true
                });
                ErrorComponent = __decorate([
                    core_1.Component({
                        selector: 'error',
                        inputs: ['errorMessage'],
                        templateUrl: 'app/components/common.UI/error/error.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ErrorComponent);
                return ErrorComponent;
            }());
            exports_1("ErrorComponent", ErrorComponent);
        }
    }
});
//# sourceMappingURL=error.component.js.map