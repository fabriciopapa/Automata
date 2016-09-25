import {Component, bind} from 'angular2/core';
import {Router} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import 'rxjs/Rx';

import {BaseComponent, SidebarComponent, TopComponent, DashboardComponent, ProjectsComponent, LoginComponent} from './components/components.module';
import {SidebarToggleEvent, LoginResultEvent} from './classes/classes.module';

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    styleUrls: ['app/app.css'],
    directives: [ROUTER_DIRECTIVES, SidebarComponent, TopComponent, DashboardComponent, LoginComponent],
    providers: [HTTP_PROVIDERS]
})

@RouteConfig([
    {path: '/', component: DashboardComponent, name: 'DashboardComponent'},
    {path: '/home', component: DashboardComponent, name: 'DashboardComponent'},
    {path: '/projects', component: ProjectsComponent, name: 'ProjectsComponent'}
])

class App {

    private _toggle:boolean = false;
    private _sidebarOptionName: string;
    private _userAuthenticated: boolean;
    private _router: Router;
    private _userLogged: boolean;

    get toggle(): boolean { return this._toggle; }
    get sidebarOptionName(): string { return this._sidebarOptionName; }
    get userAuthenticated(): boolean { return this._userAuthenticated; }
    get userLogged(): boolean { return this._userLogged; }

    constructor(router: Router) {
        this._router = router;
        this._userLogged = false;
    }

    protected processLogin(event: LoginResultEvent): void{
        var ea = 'eaea';
        localStorage.setItem('user', ea.toString()); 
        this._userLogged = true;
        this._router.navigateByUrl('/home');
    }

    protected processSidebarToggle(event: SidebarToggleEvent): void{
        this._toggle = event.value;
        this._sidebarOptionName = event.name;
    }

    protected processLogout(event: any): void{
        localStorage.removeItem('user');
        this._userLogged = false;
        this._router.navigateByUrl('/login');
    }
}

//bootstrap(Main, [ROUTER_PROVIDERS, FORM_PROVIDERS, ROUTER_PROVIDERS, HTTP_PROVIDERS, UserListService, ServerListService, bind(LocationStrategy).toClass(HashLocationStrategy)]);
bootstrap(App, [ROUTER_PROVIDERS, FORM_PROVIDERS, ROUTER_PROVIDERS, HTTP_PROVIDERS, bind(LocationStrategy).toClass(HashLocationStrategy)]);
