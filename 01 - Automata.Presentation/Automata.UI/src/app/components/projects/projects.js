System.register(['angular2/core', '../rd-loading/rd-loading', '../rd-widget/rd-widget', '../rd-widget-header/rd-widget-header', '../rd-widget-body/rd-widget-body', '../rd-widget-footer/rd-widget-footer', '../../services/server_list', './projects.module'], function(exports_1, context_1) {
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
    var core_1, rd_loading_1, rd_widget_1, rd_widget_header_1, rd_widget_body_1, rd_widget_footer_1, server_list_1, projects_module_1;
    var Projects;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rd_loading_1_1) {
                rd_loading_1 = rd_loading_1_1;
            },
            function (rd_widget_1_1) {
                rd_widget_1 = rd_widget_1_1;
            },
            function (rd_widget_header_1_1) {
                rd_widget_header_1 = rd_widget_header_1_1;
            },
            function (rd_widget_body_1_1) {
                rd_widget_body_1 = rd_widget_body_1_1;
            },
            function (rd_widget_footer_1_1) {
                rd_widget_footer_1 = rd_widget_footer_1_1;
            },
            function (server_list_1_1) {
                server_list_1 = server_list_1_1;
            },
            function (projects_module_1_1) {
                projects_module_1 = projects_module_1_1;
            }],
        execute: function() {
            Projects = (function () {
                function Projects(serverListService) {
                    this.serverListService = serverListService;
                    this._servers = this.serverListService.all();
                }
                Projects.prototype.ngOnInit = function () {
                };
                Projects = __decorate([
                    core_1.Component({
                        selector: 'projects',
                        providers: [server_list_1.ServerListService],
                        templateUrl: 'app/components/projects/projects.html',
                        directives: [rd_widget_1.RdWidget, rd_widget_header_1.RdWidgetHeader, rd_widget_body_1.RdWidgetBody, rd_widget_footer_1.RdWidgetFooter, rd_loading_1.RdLoading, projects_module_1.ProjectsList]
                    }), 
                    __metadata('design:paramtypes', [server_list_1.ServerListService])
                ], Projects);
                return Projects;
            }());
            exports_1("Projects", Projects);
        }
    }
});
//# sourceMappingURL=projects.js.map