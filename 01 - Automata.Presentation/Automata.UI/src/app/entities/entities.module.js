System.register(['./business/business.module', './common/common.module', './events/events.module', './method-parameters/method-parameters.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (business_module_1_1) {
                exportStar_1(business_module_1_1);
            },
            function (common_module_1_1) {
                exportStar_1(common_module_1_1);
            },
            function (events_module_1_1) {
                exportStar_1(events_module_1_1);
            },
            function (method_parameters_module_1_1) {
                exportStar_1(method_parameters_module_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=entities.module.js.map