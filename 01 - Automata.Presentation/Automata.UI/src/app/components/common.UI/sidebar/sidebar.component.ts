import {Component, EventEmitter} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Router} from 'angular2/router';

import {BaseComponent, LoadingComponent, WidgetComponent, WidgetButtonComponent, WidgetHeaderComponent, WidgetBodyComponent, WidgetFooterComponent} from '../../components.module'
import {SidebarToggleEvent} from '../../../classes/classes.module'

@Component({
    selector: 'sidebar',
    templateUrl: 'app/components/common.UI/sidebar/sidebar.component.html',
    styleUrls: ['app/components/common.UI/sidebar/sidebar.component.css'],
    outputs: ['onToggled'],
    directives: [ROUTER_DIRECTIVES, LoadingComponent, WidgetComponent, WidgetButtonComponent, WidgetHeaderComponent, WidgetBodyComponent, WidgetFooterComponent]
})

export class SidebarComponent extends BaseComponent{

    private _mobileView:number = 992;
    private _toggle:boolean = false;
    private _onToggled: EventEmitter<SidebarToggleEvent> = new EventEmitter<SidebarToggleEvent>();
    private _selectedOption: string;
    private _router: Router;
    
    get onToggled(): EventEmitter<SidebarToggleEvent> { return this._onToggled; }
    set onToggled(value: EventEmitter<SidebarToggleEvent>) { this._onToggled = value; }

    get selectedOption(): string { return this._selectedOption; }

    constructor(router: Router){
        super();
        this._router = router;
        this.initialize();
    }

    protected initialize() {
        this.attachEvents();
        this._selectedOption = 'DashboardComponent';
    }

    protected attachEvents() {
        window.onresize = ()=> {
            if (this.getWidth() >= this._mobileView) {
                if (localStorage.getItem('toggle')) {
                    this._toggle = !localStorage.getItem('toggle') ? false : true;
                } else {
                    this._toggle = true;
                }
            } else {
                this._toggle = false;
            }
        }
    }

    protected getWidth() {
        return window.innerWidth;
    }

    protected toggleSidebar(optionName: string) {
        this._toggle = !this._toggle;
        localStorage.setItem('toggle', this._toggle.toString()); 

        let sidebarToggleEvent : SidebarToggleEvent = new SidebarToggleEvent();
        sidebarToggleEvent.value = this._toggle;
        sidebarToggleEvent.name = optionName;
        this.onToggled.emit(sidebarToggleEvent);
    }

    protected toggleQuickOption(optionName: string) {
        this._selectedOption = optionName;

        if(this._toggle) {
            this.toggleSidebar(optionName);
        }
    }

    protected isQuickOptionActive(optionName:string) : string {
        let result : string;

        if(this._router.currentInstruction != undefined && this._router.currentInstruction.component != undefined && this._router.currentInstruction.component.componentType.name != undefined){
            this._selectedOption = this._router.currentInstruction.component.componentType.name;
        }

        if(!this._toggle && optionName == this.selectedOption) {
            result = 'active';
        }
        else {
            result = '';
        }
        return result;
    }

    protected isMenuOptionActive(optionName:string) : string {
        let result : string;

        if(this._router.currentInstruction != undefined && this._router.currentInstruction.component != undefined && this._router.currentInstruction.component.componentType.name != undefined){
            this._selectedOption = this._router.currentInstruction.component.componentType.name;
        }

        if(this._toggle && optionName == this.selectedOption) {
            result = 'active';
        }
        else {
            result = '';
        }
        return result;
    }
}
