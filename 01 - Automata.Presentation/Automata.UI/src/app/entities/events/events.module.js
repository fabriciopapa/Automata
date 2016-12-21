System.register(['./common.UI/sidebar/sidebar-toggle.event', './common.UI/logIn/logIn-result.event', './common.UI/signIn/signIn-result.event'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (sidebar_toggle_event_1_1) {
                exports_1({
                    "SidebarToggleEvent": sidebar_toggle_event_1_1["SidebarToggleEvent"]
                });
            },
            function (logIn_result_event_1_1) {
                exports_1({
                    "LogInResultEvent": logIn_result_event_1_1["LogInResultEvent"]
                });
            },
            function (signIn_result_event_1_1) {
                exports_1({
                    "SignInResultEvent": signIn_result_event_1_1["SignInResultEvent"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=events.module.js.map