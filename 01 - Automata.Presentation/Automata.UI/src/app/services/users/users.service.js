System.register(["angular2/core", "angular2/http", 'rxjs/Rx', '../services.module', '../../entities/entities.module'], function(exports_1, context_1) {
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
    var core_1, http_1, services_module_1, entities_module_1;
    var UsersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (services_module_1_1) {
                services_module_1 = services_module_1_1;
            },
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            }],
        execute: function() {
            UsersService = (function (_super) {
                __extends(UsersService, _super);
                function UsersService(http) {
                    _super.call(this, http);
                }
                UsersService.prototype.logIn = function (input) {
                    var parameters = new entities_module_1.Dictionary();
                    parameters.add("input", input);
                    var response = this.executeGet("Users", "LogIn", parameters).map(this.mapLogInResponse.bind(this));
                    return response;
                };
                UsersService.prototype.mapLogInResponse = function (info) {
                    var result = info;
                    return result;
                };
                UsersService.prototype.logOut = function (input) {
                    var parameters = new entities_module_1.Dictionary();
                    parameters.add("input", input);
                    var response = this.executeGet("Users", "LogOut", parameters).map(this.mapLogOutResponse.bind(this));
                    return response;
                };
                UsersService.prototype.mapLogOutResponse = function (info) {
                    var result = info;
                    return result;
                };
                UsersService.prototype.signIn = function (input) {
                    var parameters = new entities_module_1.Dictionary();
                    parameters.add("input", input);
                    var response = this.executeGet("Users", "SignIn", parameters).map(this.mapSignInResponse.bind(this));
                    return response;
                };
                UsersService.prototype.mapSignInResponse = function (info) {
                    var result = info;
                    return result;
                };
                UsersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UsersService);
                return UsersService;
            }(services_module_1.BaseService));
            exports_1("UsersService", UsersService);
        }
    }
});
//# sourceMappingURL=users.service.js.map