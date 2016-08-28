import {Component, bind} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import 'rxjs/Rx';

import {BaseComponent, SidebarComponent, TopComponent, DashboardComponent, ProjectsComponent} from './components/components.module';
import {SidebarToggleEvent} from './classes/classes.module';

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    styleUrls: ['app/app.css'],
    directives: [ROUTER_DIRECTIVES, SidebarComponent, TopComponent, DashboardComponent]
})

@RouteConfig([
    {path: '/', component: DashboardComponent, name: 'DashboardComponent'},
    {path: '/projects', component: ProjectsComponent, name: 'ProjectsComponent'}
])

class App {

    private _toggle:boolean = false;
    private _sidebarOptionName: string;

    get toggle(): boolean { return this._toggle; }
    get sidebarOptionName(): string { return this._sidebarOptionName; }

    constructor() {
    }

    protected processSidebarToggle(event: SidebarToggleEvent){
        this._toggle = event.value;
        this._sidebarOptionName = event.name;
    }
}

//bootstrap(Main, [ROUTER_PROVIDERS, FORM_PROVIDERS, ROUTER_PROVIDERS, HTTP_PROVIDERS, UserListService, ServerListService, bind(LocationStrategy).toClass(HashLocationStrategy)]);
bootstrap(App, [ROUTER_PROVIDERS, FORM_PROVIDERS, ROUTER_PROVIDERS, HTTP_PROVIDERS, bind(LocationStrategy).toClass(HashLocationStrategy)]);
