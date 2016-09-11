System.register(['angular2/core', '../../../services/projects/projects.service', '../../../classes/classes.module'], function(exports_1, context_1) {
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
    var core_1, projects_service_1, classes_module_1;
    var ProjectsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (projects_service_1_1) {
                projects_service_1 = projects_service_1_1;
            },
            function (classes_module_1_1) {
                classes_module_1 = classes_module_1_1;
            }],
        execute: function() {
            ProjectsListComponent = (function () {
                function ProjectsListComponent(projectsService) {
                    this.projectsService = projectsService;
                    this.model = [];
                }
                ProjectsListComponent.prototype.ngOnInit = function () {
                    this.getProjectsFromService();
                };
                ProjectsListComponent.prototype.getProjectsFromService = function () {
                    var _this = this;
                    var getProjectsIn = new classes_module_1.GetProjectsIn();
                    this.projectsService.getProjects(getProjectsIn).subscribe(function (response) { return _this.mapGetProjectsFromService(response); });
                };
                ProjectsListComponent.prototype.mapGetProjectsFromService = function (response) {
                    this.model = response.Projects;
                };
                ProjectsListComponent = __decorate([
                    core_1.Component({
                        selector: 'projects-list',
                        inputs: ['model'],
                        templateUrl: 'app/components/projects.UI/projects-list/projects-list.component.html',
                        providers: [projects_service_1.ProjectsService]
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