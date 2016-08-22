System.register(['angular2/core', '../../../services/projects/projects.service'], function(exports_1, context_1) {
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
    var core_1, projects_service_1;
    var ProjectsList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (projects_service_1_1) {
                projects_service_1 = projects_service_1_1;
            }],
        execute: function() {
            ProjectsList = (function () {
                function ProjectsList(projectsService) {
                    this.projectsService = projectsService;
                    this.model = [];
                }
                ProjectsList.prototype.ngOnInit = function () { this.getHeroes(); };
                ProjectsList.prototype.getHeroes = function () {
                    var ea;
                    this.projectsService.getProjects().subscribe();
                };
                ProjectsList = __decorate([
                    core_1.Component({
                        selector: 'projects-list',
                        inputs: ['model'],
                        templateUrl: 'app/components/projects/projectsList/projectsList.html',
                        providers: [projects_service_1.ProjectsService]
                    }), 
                    __metadata('design:paramtypes', [projects_service_1.ProjectsService])
                ], ProjectsList);
                return ProjectsList;
            }());
            exports_1("ProjectsList", ProjectsList);
        }
    }
});
//# sourceMappingURL=projectsList.js.map