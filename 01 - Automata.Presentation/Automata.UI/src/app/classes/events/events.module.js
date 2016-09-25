System.register(['./common.UI/sidebar/sidebar-toggle.event', './common.UI/login/login-result.event'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (sidebar_toggle_event_1_1) {
                exports_1({
                    "SidebarToggleEvent": sidebar_toggle_event_1_1["SidebarToggleEvent"]
                });
            },
            function (login_result_event_1_1) {
                exports_1({
                    "LoginResultEvent": login_result_event_1_1["LoginResultEvent"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=events.module.js.map