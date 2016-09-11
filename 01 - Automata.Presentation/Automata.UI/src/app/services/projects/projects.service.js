System.register(["angular2/core", "angular2/http", 'rxjs/Rx', '../services.module', '../../entities/entities.module', '../../classes/classes.module'], function(exports_1, context_1) {
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
    var core_1, http_1, services_module_1, entities_module_1, classes_module_1;
    var ProjectsService;
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
            },
            function (classes_module_1_1) {
                classes_module_1 = classes_module_1_1;
            }],
        execute: function() {
            ProjectsService = (function (_super) {
                __extends(ProjectsService, _super);
                function ProjectsService(http) {
                    _super.call(this, http);
                }
                ProjectsService.prototype.getProjects = function (input) {
                    var _this = this;
                    return this.executeGet('Projects', 'GetProjects').map(function (res) { return _this.extractGetProjects(res); });
                };
                ProjectsService.prototype.extractGetProjects = function (res) {
                    var body = res.json();
                    var output = new classes_module_1.GetProjectsOut();
                    output.Projects = [];
                    for (var i = 0; i < body.Projects.length; i++) {
                        var project = new entities_module_1.Project();
                        project.Id = body.Projects[i].Id;
                        project.Name = body.Projects[i].Name;
                        project.Url = body.Projects[i].Url;
                        output.Projects.push(project);
                    }
                    return output;
                };
                ProjectsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProjectsService);
                return ProjectsService;
            }(services_module_1.BaseService));
            exports_1("ProjectsService", ProjectsService);
        }
    }
});
//# sourceMappingURL=projects.service.js.map