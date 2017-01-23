import { Component, EventEmitter } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Router } from 'angular2/router';

import { BaseComponent, LoadingComponent, WidgetComponent, WidgetButtonComponent, WidgetHeaderComponent, WidgetBodyComponent, WidgetFooterComponent } from '../../components.module'
import { FrontEndPages } from '../../../entities/entities.module';

@Component({
    selector: 'top',
    templateUrl: 'app/components/common.UI/top/top.component.html',
    outputs: ['onLogout'],
    directives: [ROUTER_DIRECTIVES, 
        LoadingComponent, 
        WidgetComponent, 
        WidgetButtonComponent, 
        WidgetHeaderComponent, 
        WidgetBodyComponent, 
        WidgetFooterComponent
    ]
})

export class TopComponent extends BaseComponent {

    private _onLogout: EventEmitter<any>;

    get onLogout(): EventEmitter<any> { return this._onLogout; }
    get userName(): string { 
        if(this.contextInfo.user != undefined){
            return this.contextInfo.user.Name;
        }
        return '';
    }

    constructor() {
        super();
        this._onLogout = new EventEmitter();
    }

    protected logout(): void {
        this.contextInfo.user = undefined;
        this.contextInfo.userIsAuthenticated = false;
        this.routerHelper.navigateTo(FrontEndPages.logIn)
    }
}
