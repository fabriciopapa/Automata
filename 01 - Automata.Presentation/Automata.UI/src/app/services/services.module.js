System.register(['./base/base.service', './projects/projects.service', './users/users.service', './common/routerHelper/routerHelper.service', './common/contextInfo/contextInfo.service', './common/common.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (base_service_1_1) {
                exports_1({
                    "BaseService": base_service_1_1["BaseService"]
                });
            },
            function (projects_service_1_1) {
                exports_1({
                    "ProjectsService": projects_service_1_1["ProjectsService"]
                });
            },
            function (users_service_1_1) {
                exports_1({
                    "UsersService": users_service_1_1["UsersService"]
                });
            },
            function (routerHelper_service_1_1) {
                exports_1({
                    "RouterHelperService": routerHelper_service_1_1["RouterHelperService"]
                });
            },
            function (contextInfo_service_1_1) {
                exports_1({
                    "ContextInfoService": contextInfo_service_1_1["ContextInfoService"]
                });
            },
            function (common_service_1_1) {
                exports_1({
                    "CommonService": common_service_1_1["CommonService"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=services.module.js.map