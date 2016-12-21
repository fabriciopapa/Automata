System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FrontEndPages;
    return {
        setters:[],
        execute: function() {
            FrontEndPages = (function () {
                function FrontEndPages() {
                }
                FrontEndPages.getPageByValue = function (value) {
                    var result;
                    switch (value) {
                        case "home":
                            result = FrontEndPages.home;
                            break;
                        case "logIn":
                            result = FrontEndPages.logIn;
                            break;
                        case "signIn":
                            result = FrontEndPages.signIn;
                            break;
                        case "dashboard":
                            result = FrontEndPages.dashboard;
                            break;
                        case "projects":
                            result = FrontEndPages.projects;
                            break;
                    }
                    return result;
                };
                FrontEndPages.home = "home";
                FrontEndPages.logIn = "logIn";
                FrontEndPages.signIn = "signIn";
                FrontEndPages.dashboard = "dashboard";
                FrontEndPages.projects = "projects";
                return FrontEndPages;
            }());
            exports_1("FrontEndPages", FrontEndPages);
        }
    }
});
//# sourceMappingURL=frontEndPages.js.map