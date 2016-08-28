System.register(['angular2/core', 'angular2/router', '../../components.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, components_module_1;
    var TopComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (components_module_1_1) {
                components_module_1 = components_module_1_1;
            }],
        execute: function() {
            TopComponent = (function (_super) {
                __extends(TopComponent, _super);
                function TopComponent() {
                    _super.call(this);
                }
                TopComponent = __decorate([
                    core_1.Component({
                        selector: 'top',
                        templateUrl: 'app/components/common.UI/top/top.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, components_module_1.LoadingComponent, components_module_1.WidgetComponent, components_module_1.WidgetButtonComponent, components_module_1.WidgetHeaderComponent, components_module_1.WidgetBodyComponent, components_module_1.WidgetFooterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TopComponent);
                return TopComponent;
            }(components_module_1.BaseComponent));
            exports_1("TopComponent", TopComponent);
        }
    }
});
//# sourceMappingURL=top.component.js.map