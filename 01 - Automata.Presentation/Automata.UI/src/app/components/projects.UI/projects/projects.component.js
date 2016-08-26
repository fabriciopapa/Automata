System.register(['angular2/core', '../../components.module'], function(exports_1, context_1) {
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
    var core_1, components_module_1;
    var ProjectsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (components_module_1_1) {
                components_module_1 = components_module_1_1;
            }],
        execute: function() {
            ProjectsComponent = (function () {
                function ProjectsComponent() {
                }
                ProjectsComponent.prototype.ngOnInit = function () {
                };
                ProjectsComponent = __decorate([
                    core_1.Component({
                        selector: 'projects',
                        templateUrl: 'app/components/projects.UI/projects/projects.component.html',
                        directives: [components_module_1.WidgetBodyComponent, components_module_1.WidgetComponent, components_module_1.WidgetFooterComponent, components_module_1.WidgetHeaderComponent, components_module_1.LoadingComponent, components_module_1.ProjectsListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProjectsComponent);
                return ProjectsComponent;
            }());
            exports_1("ProjectsComponent", ProjectsComponent);
        }
    }
});
//# sourceMappingURL=projects.component.js.map