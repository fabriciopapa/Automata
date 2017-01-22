System.register(['angular2/core', '../../../services/services.module', '../../../entities/entities.module', '../../components.module'], function(exports_1, context_1) {
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
    var core_1, services_module_1, entities_module_1, components_module_1;
    var LogInComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_module_1_1) {
                services_module_1 = services_module_1_1;
            },
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            },
            function (components_module_1_1) {
                components_module_1 = components_module_1_1;
            }],
        execute: function() {
            LogInComponent = (function (_super) {
                __extends(LogInComponent, _super);
                function LogInComponent(usersService, commonService) {
                    _super.call(this);
                    this._invalidCredentials = false;
                    this._requiredFieldsEntered = true;
                    this._signInButtonDisabled = false;
                    this._logInButtonDisabled = false;
                    this._onLogIn = new core_1.EventEmitter();
                    this._usersService = usersService;
                    this._commonService = commonService;
                    this.pingServer();
                }
                Object.defineProperty(LogInComponent.prototype, "onLogIn", {
                    get: function () { return this._onLogIn; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LogInComponent.prototype, "invalidCredentials", {
                    get: function () { return this._invalidCredentials; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LogInComponent.prototype, "requiredFieldsEntered", {
                    get: function () { return this._requiredFieldsEntered; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LogInComponent.prototype, "logInButtonDisabled", {
                    get: function () { return this._logInButtonDisabled; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LogInComponent.prototype, "signInButtonDisabled", {
                    get: function () { return this._signInButtonDisabled; },
                    enumerable: true,
                    configurable: true
                });
                LogInComponent.prototype.pingServer = function () {
                    var input = new entities_module_1.BaseMethodIn();
                    this._commonService.pingServer(input).subscribe();
                };
                LogInComponent.prototype.goToLogIn = function () {
                    this.routerHelper.navigateTo(entities_module_1.FrontEndPages.logIn);
                };
                LogInComponent.prototype.goToHome = function (event) {
                    this.routerHelper.navigateTo(entities_module_1.FrontEndPages.home);
                };
                LogInComponent.prototype.signIn = function () {
                    this.navigateTo(entities_module_1.FrontEndPages.signIn);
                };
                LogInComponent.prototype.logIn = function () {
                    if (!this._logInButtonDisabled) {
                        this._invalidCredentials = false;
                        this._requiredFieldsEntered = this._userName.nativeElement.value != "" && this._password.nativeElement.value != "";
                        if (this._requiredFieldsEntered) {
                            this.switchButtons(false);
                            var input = new entities_module_1.LogInIn();
                            input.UserName = this._userName.nativeElement.value;
                            input.Password = this._password.nativeElement.value;
                            this._usersService.logIn(input).subscribe(this.mapLogInResponse.bind(this), this.onLogInError.bind(this));
                        }
                    }
                };
                LogInComponent.prototype.mapLogInResponse = function (result) {
                    if (result.OperationResult == entities_module_1.OperationResult.Success) {
                        var logInResultEvent = new entities_module_1.LogInResultEvent();
                        logInResultEvent.result = result;
                        if (result.User) {
                            this.contextInfo.user = result.User;
                            this.contextInfo.userIsAuthenticated = true;
                            this.goToHome();
                        }
                    }
                    else {
                        this.onLogInError();
                    }
                };
                LogInComponent.prototype.onLogInError = function (error) {
                    this._invalidCredentials = true;
                    this.switchButtons(true);
                };
                LogInComponent.prototype.switchButtons = function (enable) {
                    this._signInButtonDisabled = !enable;
                    this._logInButtonDisabled = !enable;
                };
                __decorate([
                    core_1.ViewChild('userName'), 
                    __metadata('design:type', core_1.ElementRef)
                ], LogInComponent.prototype, "_userName", void 0);
                __decorate([
                    core_1.ViewChild('password'), 
                    __metadata('design:type', core_1.ElementRef)
                ], LogInComponent.prototype, "_password", void 0);
                LogInComponent = __decorate([
                    core_1.Component({
                        selector: 'logIn',
                        outputs: ['onLogIn'],
                        providers: [services_module_1.UsersService,
                            services_module_1.CommonService
                        ],
                        templateUrl: 'app/components/common.UI/logIn/logIn.component.html',
                        styleUrls: ['app/components/common.UI/logIn/logIn.component.css']
                    }), 
                    __metadata('design:paramtypes', [services_module_1.UsersService, services_module_1.CommonService])
                ], LogInComponent);
                return LogInComponent;
            }(components_module_1.BaseComponent));
            exports_1("LogInComponent", LogInComponent);
        }
    }
});
//# sourceMappingURL=logIn.component.js.map