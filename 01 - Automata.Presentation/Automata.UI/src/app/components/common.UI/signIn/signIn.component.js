System.register(['angular2/core', '../../../entities/entities.module', '../../../services/services.module'], function(exports_1, context_1) {
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
    var core_1, entities_module_1, services_module_1;
    var SignInComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            },
            function (services_module_1_1) {
                services_module_1 = services_module_1_1;
            }],
        execute: function() {
            SignInComponent = (function () {
                function SignInComponent(usersService) {
                    this._invalidCredentials = false;
                    this._requiredFieldsNotEntered = false;
                    this._onSignIn = new core_1.EventEmitter();
                    this._usersService = usersService;
                }
                Object.defineProperty(SignInComponent.prototype, "onSignIn", {
                    get: function () { return this._onSignIn; },
                    enumerable: true,
                    configurable: true
                });
                SignInComponent.prototype.signIn = function () {
                    this._requiredFieldsNotEntered = this._userName.nativeElement.value != '' &&
                        this._password.nativeElement.value != '';
                    if (!this._requiredFieldsNotEntered) {
                        var input = new entities_module_1.SignInIn();
                        input.UserName = this._userName.nativeElement.value;
                        input.Password = this._password.nativeElement.value;
                        this._usersService.signIn(input).subscribe(this.mapSignInResponse.bind(this), this.onSignInError.bind(this));
                    }
                };
                SignInComponent.prototype.mapSignInResponse = function (result) {
                    if (result.OperationResult == entities_module_1.OperationResult.Success) {
                        var signInResultEvent = new entities_module_1.SignInResultEvent();
                        signInResultEvent.result = result;
                        this._onSignIn.emit(signInResultEvent);
                    }
                    else {
                        this._invalidCredentials = true;
                    }
                };
                SignInComponent.prototype.onSignInError = function (error) {
                    this._invalidCredentials = true;
                };
                __decorate([
                    core_1.ViewChild('userName'), 
                    __metadata('design:type', core_1.ElementRef)
                ], SignInComponent.prototype, "_userName", void 0);
                __decorate([
                    core_1.ViewChild('password'), 
                    __metadata('design:type', core_1.ElementRef)
                ], SignInComponent.prototype, "_password", void 0);
                SignInComponent = __decorate([
                    core_1.Component({
                        selector: 'signIn',
                        outputs: ['onSignIn'],
                        providers: [services_module_1.UsersService],
                        templateUrl: 'app/components/common.UI/signIn/signIn.component.html',
                        styleUrls: ['app/components/common.UI/signIn/signIn.component.css']
                    }), 
                    __metadata('design:paramtypes', [services_module_1.UsersService])
                ], SignInComponent);
                return SignInComponent;
            }());
            exports_1("SignInComponent", SignInComponent);
        }
    }
});
//# sourceMappingURL=signIn.component.js.map