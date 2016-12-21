System.register(['./assemblies/assembly', './projects/project', './users/user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (assembly_1_1) {
                exports_1({
                    "Assembly": assembly_1_1["Assembly"]
                });
            },
            function (project_1_1) {
                exports_1({
                    "Project": project_1_1["Project"]
                });
            },
            function (user_1_1) {
                exports_1({
                    "User": user_1_1["User"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=business.module.js.map