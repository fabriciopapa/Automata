System.register(['angular2/core', 'angular2/router', '../../components.module', '../../../classes/classes.module'], function(exports_1, context_1) {
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
    var core_1, router_1, components_module_1, classes_module_1;
    var SidebarComponent;
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
            },
            function (classes_module_1_1) {
                classes_module_1 = classes_module_1_1;
            }],
        execute: function() {
            SidebarComponent = (function (_super) {
                __extends(SidebarComponent, _super);
                function SidebarComponent(router) {
                    _super.call(this);
                    this._mobileView = 992;
                    this._toggle = false;
                    this._onToggled = new core_1.EventEmitter();
                    this._router = router;
                    this.initialize();
                }
                Object.defineProperty(SidebarComponent.prototype, "onToggled", {
                    get: function () { return this._onToggled; },
                    set: function (value) { this._onToggled = value; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SidebarComponent.prototype, "selectedOption", {
                    get: function () { return this._selectedOption; },
                    enumerable: true,
                    configurable: true
                });
                SidebarComponent.prototype.initialize = function () {
                    this.attachEvents();
                    this._selectedOption = 'DashboardComponent';
                };
                SidebarComponent.prototype.attachEvents = function () {
                    var _this = this;
                    window.onresize = function () {
                        if (_this.getWidth() >= _this._mobileView) {
                            if (localStorage.getItem('toggle')) {
                                _this._toggle = !localStorage.getItem('toggle') ? false : true;
                            }
                            else {
                                _this._toggle = true;
                            }
                        }
                        else {
                            _this._toggle = false;
                        }
                    };
                };
                SidebarComponent.prototype.getWidth = function () {
                    return window.innerWidth;
                };
                SidebarComponent.prototype.toggleSidebar = function (optionName) {
                    this._toggle = !this._toggle;
                    localStorage.setItem('toggle', this._toggle.toString());
                    var sidebarToggleEvent = new classes_module_1.SidebarToggleEvent();
                    sidebarToggleEvent.value = this._toggle;
                    sidebarToggleEvent.name = optionName;
                    this.onToggled.emit(sidebarToggleEvent);
                };
                SidebarComponent.prototype.toggleQuickOption = function (optionName) {
                    this._selectedOption = optionName;
                    if (this._toggle) {
                        this.toggleSidebar(optionName);
                    }
                };
                SidebarComponent.prototype.isQuickOptionActive = function (optionName) {
                    var result;
                    if (this._router.currentInstruction != undefined && this._router.currentInstruction.component != undefined && this._router.currentInstruction.component.componentType.name != undefined) {
                        this._selectedOption = this._router.currentInstruction.component.componentType.name;
                    }
                    if (!this._toggle && optionName == this.selectedOption) {
                        result = 'active';
                    }
                    else {
                        result = '';
                    }
                    return result;
                };
                SidebarComponent.prototype.isMenuOptionActive = function (optionName) {
                    var result;
                    if (this._router.currentInstruction != undefined && this._router.currentInstruction.component != undefined && this._router.currentInstruction.component.componentType.name != undefined) {
                        this._selectedOption = this._router.currentInstruction.component.componentType.name;
                    }
                    if (this._toggle && optionName == this.selectedOption) {
                        result = 'active';
                    }
                    else {
                        result = '';
                    }
                    return result;
                };
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'sidebar',
                        templateUrl: 'app/components/common.UI/sidebar/sidebar.component.html',
                        styleUrls: ['app/components/common.UI/sidebar/sidebar.component.css'],
                        outputs: ['onToggled'],
                        directives: [router_1.ROUTER_DIRECTIVES, components_module_1.LoadingComponent, components_module_1.WidgetComponent, components_module_1.WidgetButtonComponent, components_module_1.WidgetHeaderComponent, components_module_1.WidgetBodyComponent, components_module_1.WidgetFooterComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], SidebarComponent);
                return SidebarComponent;
            }(components_module_1.BaseComponent));
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});
//# sourceMappingURL=sidebar.component.js.map