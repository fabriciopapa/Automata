System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OperationResult;
    return {
        setters:[],
        execute: function() {
            (function (OperationResult) {
                OperationResult[OperationResult["Success"] = 0] = "Success";
                OperationResult[OperationResult["PartialSuccess"] = 1] = "PartialSuccess";
                OperationResult[OperationResult["Errorzz"] = 2] = "Errorzz";
            })(OperationResult || (OperationResult = {}));
            exports_1("OperationResult", OperationResult);
        }
    }
});
//# sourceMappingURL=operationResult.js.map