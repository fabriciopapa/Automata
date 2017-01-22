import { Component, bind, Injector, ComponentRef } from 'angular2/core';
import { Router } from 'angular2/router';
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { FORM_PROVIDERS } from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import 'rxjs/Rx';

import { BaseComponent, SidebarComponent, TopComponent, DashboardComponent, ProjectsComponent, LogInComponent,
    SignInComponent, LoadingComponent } from './components/components.module';
import { SidebarToggleEvent, LogInResultEvent, OperationResult, AppInjector } from './entities/entities.module';
import { RouterHelperService, ContextInfoService } from './services/services.module';

let bootstrapPromiseResolved = false;

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    styleUrls: ['app/app.css'],
    directives: [ROUTER_DIRECTIVES, 
        SidebarComponent, 
        TopComponent, 
        DashboardComponent, 
        LogInComponent,
        SignInComponent,
        LoadingComponent],
    providers: [HTTP_PROVIDERS]
})

@RouteConfig([
    { path: '/logIn', component: LogInComponent, name: 'LogIn', useAsDefault: true },
    { path: '/signIn', component: SignInComponent, name: 'SignIn' },
    { path: '/home', component: DashboardComponent, name: 'Home'},
    { path: '/projects', component: ProjectsComponent, name: 'Projects' }
])

class App {

    private _toggle: boolean = false;
    private _usingPrivateSession: boolean;
    private _router: Router;

    get toggle(): boolean { return this._toggle; }
    get usingPrivateSession(): any {
        this._usingPrivateSession = this.contextInfo.userIsAuthenticated;
        return this._usingPrivateSession;
    }

    constructor(private contextInfo: ContextInfoService) {
        this._usingPrivateSession = false;
    }

    protected processSidebarToggle(event: SidebarToggleEvent): void {
        this._toggle = event.value;
    }
    
    protected isLoading(): boolean {
        return this.contextInfo.isLoading;
    } 
}

bootstrap(App, [ROUTER_PROVIDERS, 
FORM_PROVIDERS, 
ROUTER_PROVIDERS, 
HTTP_PROVIDERS,
ContextInfoService,
RouterHelperService,
bind(LocationStrategy).toClass(HashLocationStrategy)]).then((appRef: ComponentRef) => {
        AppInjector(appRef.injector);
        bootstrapPromiseResolved = true;
});
