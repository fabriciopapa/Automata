System.register(['./dashboard/dashboard', './projects/projects', './sidebar/sidebar'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (dashboard_1_1) {
                exports_1({
                    "Dashboard": dashboard_1_1["Dashboard"]
                });
            },
            function (projects_1_1) {
                exports_1({
                    "Projects": projects_1_1["Projects"]
                });
            },
            function (sidebar_1_1) {
                exports_1({
                    "Sidebar": sidebar_1_1["Sidebar"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=components.module.js.map