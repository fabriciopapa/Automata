System.register(['angular2/core', 'angular2/router', '../../components.module', '../../../entities/entities.module', '../../../services/services.module'], function(exports_1, context_1) {
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
    var core_1, router_1, components_module_1, entities_module_1, services_module_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
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
            DashboardComponent = (function (_super) {
                __extends(DashboardComponent, _super);
                function DashboardComponent(usersService) {
                    _super.call(this);
                    this._projectsCount = 0;
                    this._pagesCount = 0;
                    this._methodsCount = 0;
                    this._testsCount = 0;
                    this._usersService = usersService;
                    this.getDashboard();
                }
                Object.defineProperty(DashboardComponent.prototype, "projectsCount", {
                    get: function () { return this._projectsCount; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DashboardComponent.prototype, "pagesCount", {
                    get: function () { return this._pagesCount; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DashboardComponent.prototype, "methodsCount", {
                    get: function () { return this._methodsCount; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DashboardComponent.prototype, "testsCount", {
                    get: function () { return this._testsCount; },
                    enumerable: true,
                    configurable: true
                });
                DashboardComponent.prototype.getDashboard = function () {
                    var input = new entities_module_1.GetDashboardIn();
                    input.UserId = this.contextInfo.user.PK_Id;
                    this._usersService.getDashboard(input).subscribe(this.mapGetDashboardResponse.bind(this));
                };
                DashboardComponent.prototype.mapGetDashboardResponse = function (result) {
                    if (result.OperationResult == entities_module_1.OperationResult.Success) {
                        this._projectsCount = result.ProjectsCount;
                        this._pagesCount = result.PagesCount;
                        this._methodsCount = result.MethodsCount;
                        this._testsCount = result.TestsCount;
                    }
                };
                DashboardComponent.prototype.navigateToProjects = function () {
                    this.contextInfo.dashboardOption = entities_module_1.FrontEndPages.projects.toString();
                    this.routerHelper.navigateTo(entities_module_1.FrontEndPages.projects);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'app/components/common.UI/dashboard/dashboard.component.html',
                        styleUrls: ['app/components/common.UI/dashboard/dashboard.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES,
                            components_module_1.LoadingComponent,
                            components_module_1.WidgetComponent,
                            components_module_1.WidgetButtonComponent,
                            components_module_1.WidgetHeaderComponent,
                            components_module_1.WidgetBodyComponent,
                            components_module_1.WidgetFooterComponent],
                        providers: [
                            services_module_1.UsersService
                        ]
                    }), 
                    __metadata('design:paramtypes', [services_module_1.UsersService])
                ], DashboardComponent);
                return DashboardComponent;
            }(components_module_1.BaseComponent));
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map