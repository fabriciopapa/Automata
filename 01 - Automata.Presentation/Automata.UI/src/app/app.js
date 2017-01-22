System.register(['angular2/core', 'angular2/platform/browser', 'angular2/http', 'angular2/common', 'angular2/router', 'rxjs/Rx', './components/components.module', './entities/entities.module', './services/services.module'], function(exports_1, context_1) {
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
    var core_1, browser_1, http_1, common_1, router_1, components_module_1, entities_module_1, services_module_1;
    var bootstrapPromiseResolved, App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (components_module_1_1) {
                components_module_1 = components_module_1_1;
            },
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            },
            function (services_module_1_1) {
                services_module_1 = services_module_1_1;
            }],
        execute: function() {
            bootstrapPromiseResolved = false;
            App = (function () {
                function App(contextInfo) {
                    this.contextInfo = contextInfo;
                    this._toggle = false;
                    this._usingPrivateSession = false;
                }
                Object.defineProperty(App.prototype, "toggle", {
                    get: function () { return this._toggle; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(App.prototype, "usingPrivateSession", {
                    get: function () {
                        this._usingPrivateSession = this.contextInfo.userIsAuthenticated;
                        return this._usingPrivateSession;
                    },
                    enumerable: true,
                    configurable: true
                });
                App.prototype.processSidebarToggle = function (event) {
                    this._toggle = event.value;
                };
                App.prototype.isLoading = function () {
                    return this.contextInfo.isLoading;
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.html',
                        styleUrls: ['app/app.css'],
                        directives: [router_1.ROUTER_DIRECTIVES,
                            components_module_1.SidebarComponent,
                            components_module_1.TopComponent,
                            components_module_1.DashboardComponent,
                            components_module_1.LogInComponent,
                            components_module_1.SignInComponent,
                            components_module_1.LoadingComponent],
                        providers: [http_1.HTTP_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/logIn', component: components_module_1.LogInComponent, name: 'LogIn', useAsDefault: true },
                        { path: '/signIn', component: components_module_1.SignInComponent, name: 'SignIn' },
                        { path: '/home', component: components_module_1.DashboardComponent, name: 'Home' },
                        { path: '/projects', component: components_module_1.ProjectsComponent, name: 'Projects' }
                    ]), 
                    __metadata('design:paramtypes', [services_module_1.ContextInfoService])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App, [router_1.ROUTER_PROVIDERS,
                common_1.FORM_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                services_module_1.ContextInfoService,
                services_module_1.RouterHelperService,
                core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)]).then(function (appRef) {
                entities_module_1.AppInjector(appRef.injector);
                bootstrapPromiseResolved = true;
            });
        }
    }
});
//# sourceMappingURL=app.js.map