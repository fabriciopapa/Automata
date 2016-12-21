System.register(['angular2/core', '../../../services/projects/projects.service', '../../../entities/entities.module', '../../components.module'], function(exports_1, context_1) {
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
    var core_1, projects_service_1, entities_module_1, components_module_1;
    var ProjectsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (projects_service_1_1) {
                projects_service_1 = projects_service_1_1;
            },
            function (entities_module_1_1) {
                entities_module_1 = entities_module_1_1;
            },
            function (components_module_1_1) {
                components_module_1 = components_module_1_1;
            }],
        execute: function() {
            ProjectsListComponent = (function () {
                function ProjectsListComponent(projectsService) {
                    this.projectsService = projectsService;
                    this.initialize();
                }
                Object.defineProperty(ProjectsListComponent.prototype, "projectsList", {
                    get: function () { return this._projectsList; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectsListComponent.prototype, "isLoading", {
                    get: function () { return this._isLoading; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectsListComponent.prototype, "isError", {
                    get: function () { return this._isError; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectsListComponent.prototype, "errorMessage", {
                    get: function () { return this._errorMessage; },
                    enumerable: true,
                    configurable: true
                });
                ProjectsListComponent.prototype.initialize = function () {
                    this._projectsList = [];
                    this._isLoading = false;
                    this._isError = false;
                    this._errorMessage = '';
                    this.getProjectsFromService();
                };
                ProjectsListComponent.prototype.getProjectsFromService = function () {
                    var _this = this;
                    this._isLoading = true;
                    this._isError = false;
                    var getProjectsIn = new entities_module_1.GetProjectsIn();
                    this.projectsService.getProjects(getProjectsIn).subscribe(function (response) { return _this.mapGetProjectsFromService(response); }, function (error) { return _this.processGetProjectsFromServiceError(error); });
                };
                ProjectsListComponent.prototype.mapGetProjectsFromService = function (response) {
                    this._isLoading = false;
                    this._projectsList = response.Projects;
                };
                ProjectsListComponent.prototype.processGetProjectsFromServiceError = function (error) {
                    this._isLoading = false;
                    this._isError = true;
                    this._errorMessage = error;
                };
                ProjectsListComponent.prototype.processSave = function () {
                    var auxProjectList = this._projectsList;
                };
                ProjectsListComponent = __decorate([
                    core_1.Component({
                        selector: 'projects-list',
                        inputs: ['model'],
                        templateUrl: 'app/components/projects.UI/projects-list/projects-list.component.html',
                        styleUrls: ['app/components/projects.UI/projects-list/projects-list.component.css'],
                        providers: [projects_service_1.ProjectsService],
                        directives: [components_module_1.WidgetBodyComponent, components_module_1.WidgetComponent, components_module_1.WidgetFooterComponent, components_module_1.WidgetHeaderComponent, components_module_1.LoadingComponent, components_module_1.ErrorComponent]
                    }), 
                    __metadata('design:paramtypes', [projects_service_1.ProjectsService])
                ], ProjectsListComponent);
                return ProjectsListComponent;
            }());
            exports_1("ProjectsListComponent", ProjectsListComponent);
        }
    }
});
//# sourceMappingURL=projects-list.component.js.map