System.register(['./projects/projects.service', './base/base.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (projects_service_1_1) {
                exports_1({
                    "ProjectsService": projects_service_1_1["ProjectsService"]
                });
            },
            function (base_service_1_1) {
                exports_1({
                    "BaseService": base_service_1_1["BaseService"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=services.module.js.map