System.register(['angular2/core', 'angular2/router', 'angular2/platform/browser', 'angular2/http', 'angular2/common', 'rxjs/Rx', './components/components.module'], function(exports_1, context_1) {
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
    var core_1, router_1, browser_1, http_1, common_1, router_2, components_module_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
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
            function (_1) {},
            function (components_module_1_1) {
                components_module_1 = components_module_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(router) {
                    this._toggle = false;
                    this._router = router;
                    this._userLogged = false;
                }
                Object.defineProperty(App.prototype, "toggle", {
                    get: function () { return this._toggle; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(App.prototype, "sidebarOptionName", {
                    get: function () { return this._sidebarOptionName; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(App.prototype, "userAuthenticated", {
                    get: function () { return this._userAuthenticated; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(App.prototype, "userLogged", {
                    get: function () { return this._userLogged; },
                    enumerable: true,
                    configurable: true
                });
                App.prototype.processLogin = function (event) {
                    var ea = 'eaea';
                    localStorage.setItem('user', ea.toString());
                    this._userLogged = true;
                    this._router.navigateByUrl('/home');
                };
                App.prototype.processSidebarToggle = function (event) {
                    this._toggle = event.value;
                    this._sidebarOptionName = event.name;
                };
                App.prototype.processLogout = function (event) {
                    localStorage.removeItem('user');
                    this._userLogged = false;
                    this._router.navigateByUrl('/login');
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.html',
                        styleUrls: ['app/app.css'],
                        directives: [router_2.ROUTER_DIRECTIVES, components_module_1.SidebarComponent, components_module_1.TopComponent, components_module_1.DashboardComponent, components_module_1.LoginComponent],
                        providers: [http_1.HTTP_PROVIDERS]
                    }),
                    router_2.RouteConfig([
                        { path: '/', component: components_module_1.DashboardComponent, name: 'DashboardComponent' },
                        { path: '/home', component: components_module_1.DashboardComponent, name: 'DashboardComponent' },
                        { path: '/projects', component: components_module_1.ProjectsComponent, name: 'ProjectsComponent' }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], App);
                return App;
            }());
            //bootstrap(Main, [ROUTER_PROVIDERS, FORM_PROVIDERS, ROUTER_PROVIDERS, HTTP_PROVIDERS, UserListService, ServerListService, bind(LocationStrategy).toClass(HashLocationStrategy)]);
            browser_1.bootstrap(App, [router_2.ROUTER_PROVIDERS, common_1.FORM_PROVIDERS, router_2.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, core_1.bind(router_2.LocationStrategy).toClass(router_2.HashLocationStrategy)]);
        }
    }
});
//# sourceMappingURL=app.js.map