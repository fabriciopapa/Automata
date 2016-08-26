import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {BaseComponent, LoadingComponent, WidgetComponent, WidgetHeaderComponent, WidgetBodyComponent, WidgetFooterComponent} from '../../components.module'

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/common.UI/dashboard/dashboard.component.html',
    styleUrls: ['app/components/common.UI/dashboard/dashboard.component.css'],
    directives: [ROUTER_DIRECTIVES, LoadingComponent, WidgetComponent, WidgetHeaderComponent, WidgetBodyComponent, WidgetFooterComponent]
})

export class DashboardComponent {

    constructor() {
    }

    ngOnInit() {

    }
}
