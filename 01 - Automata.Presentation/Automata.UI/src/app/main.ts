import {Component, bind} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

//Components
import {Dashboard, Projects, Sidebar} from './components/components.module'

//Services
import {UserListService} from './services/user_list';
import {ServerListService} from './services/server_list';

@Component({
    selector: 'app',
    templateUrl: 'app/main.html',
    styleUrls: ['app/main.css'],
    directives: [ROUTER_DIRECTIVES, Sidebar]
})

@RouteConfig([
    {path: '/', component: Dashboard, name: 'Dashboard'},
    {path: '/projects', component: Projects, name: 'Projects'}
])

class Main {

    mobileView:number = 992;
    toggle:boolean = false;

    constructor() {
        this.attachEvents();
    }

    protected attachEvents() {
        window.onresize = ()=> {
            if (this.getWidth() >= this.mobileView) {
                if (localStorage.getItem('toggle')) {
                    this.toggle = !localStorage.getItem('toggle') ? false : true;
                } else {
                    this.toggle = true;
                }
            } else {
                this.toggle = false;
            }
        }
    }

    protected getWidth() {
        return window.innerWidth;
    }

    protected toggleSidebar() {
        this.toggle = !this.toggle;
        localStorage.setItem('toggle', this.toggle.toString());
    }

    protected toggleQuickOption() {
        if(this.toggle) {
            this.toggleSidebar();
        }
    }
}

bootstrap(Main, [ROUTER_PROVIDERS, FORM_PROVIDERS, ROUTER_PROVIDERS, HTTP_PROVIDERS, UserListService, ServerListService, bind(LocationStrategy).toClass(HashLocationStrategy)]);
