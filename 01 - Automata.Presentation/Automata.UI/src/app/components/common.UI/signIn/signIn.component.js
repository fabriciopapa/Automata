System.register(['angular2/core', '../../../entities/entities.module', '../../../services/services.module', '../../components.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, entities_module_1, services_module_1, components_module_1;
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
            },
            function (components_module_1_1) {
                components_module_1 = components_module_1_1;
            }],
        execute: function() {
            SignInComponent = (function (_super) {
                __extends(SignInComponent, _super);
                function SignInComponent(usersService) {
                    _super.call(this);
                    this._invalidCredentials = false;
                    this._requiredFieldsEntered = true;
                    this._signInButtonDisabled = false;
                    this._successfulySignedIn = false;
                    this._onSignIn = new core_1.EventEmitter();
                    this._usersService = usersService;
                }
                Object.defineProperty(SignInComponent.prototype, "onSignIn", {
                    get: function () { return this._onSignIn; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignInComponent.prototype, "invalidCredentials", {
                    get: function () { return this._invalidCredentials; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignInComponent.prototype, "requiredFieldsEntered", {
                    get: function () { return this._requiredFieldsEntered; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignInComponent.prototype, "signInButtonDisabled", {
                    get: function () { return this._signInButtonDisabled; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SignInComponent.prototype, "successfulySignedIn", {
                    get: function () { return this._successfulySignedIn; },
                    enumerable: true,
                    configurable: true
                });
                SignInComponent.prototype.signIn = function () {
                    if (!this._signInButtonDisabled) {
                        this._invalidCredentials = false;
                        this._successfulySignedIn = false;
                        this._requiredFieldsEntered = this._userName.nativeElement.value != '' &&
                            this._password.nativeElement.value != '' &&
                            this._name.nativeElement.value != '' &&
                            this._lastName.nativeElement.value != '' &&
                            this._secretAnswer.nativeElement.value != '';
                        if (this._requiredFieldsEntered) {
                            this.switchButtons(false);
                            var input = new entities_module_1.SignInIn();
                            input.UserName = this._userName.nativeElement.value;
                            input.Password = this._password.nativeElement.value;
                            input.Name = this._name.nativeElement.value;
                            input.LastName = this._lastName.nativeElement.value;
                            input.SecretAnswer = this._secretAnswer.nativeElement.value;
                            this._usersService.signIn(input).subscribe(this.mapSignInResponse.bind(this), this.onSignInError.bind(this));
                        }
                    }
                };
                SignInComponent.prototype.mapSignInResponse = function (result) {
                    this.switchButtons(true);
                    if (result.OperationResult == entities_module_1.OperationResult.Success) {
                        this._successfulySignedIn = true;
                        this._userName.nativeElement.value = '';
                        this._password.nativeElement.value = '';
                        this._name.nativeElement.value = '';
                        this._lastName.nativeElement.value = '';
                        this._secretAnswer.nativeElement.value = '';
                    }
                    else {
                        this._invalidCredentials = true;
                    }
                };
                SignInComponent.prototype.onSignInError = function (error) {
                    this._invalidCredentials = true;
                    this._successfulySignedIn = false;
                    this.switchButtons(true);
                };
                SignInComponent.prototype.goToLogIn = function () {
                    this.routerHelper.navigateTo(entities_module_1.FrontEndPages.logIn);
                };
                SignInComponent.prototype.switchButtons = function (enable) {
                    this._signInButtonDisabled = !enable;
                };
                __decorate([
                    core_1.ViewChild('userName'), 
                    __metadata('design:type', core_1.ElementRef)
                ], SignInComponent.prototype, "_userName", void 0);
                __decorate([
                    core_1.ViewChild('password'), 
                    __metadata('design:type', core_1.ElementRef)
                ], SignInComponent.prototype, "_password", void 0);
                __decorate([
                    core_1.ViewChild('name'), 
                    __metadata('design:type', core_1.ElementRef)
                ], SignInComponent.prototype, "_name", void 0);
                __decorate([
                    core_1.ViewChild('lastName'), 
                    __metadata('design:type', core_1.ElementRef)
                ], SignInComponent.prototype, "_lastName", void 0);
                __decorate([
                    core_1.ViewChild('secretAnswer'), 
                    __metadata('design:type', core_1.ElementRef)
                ], SignInComponent.prototype, "_secretAnswer", void 0);
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
            }(components_module_1.BaseComponent));
            exports_1("SignInComponent", SignInComponent);
        }
    }
});
//# sourceMappingURL=signIn.component.js.map