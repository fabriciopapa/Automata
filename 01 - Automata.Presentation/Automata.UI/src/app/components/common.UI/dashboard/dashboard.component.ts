import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Router } from 'angular2/router';

import { BaseComponent, LoadingComponent, WidgetComponent, WidgetButtonComponent, WidgetHeaderComponent, WidgetBodyComponent, WidgetFooterComponent } from '../../components.module';
import { FrontEndPages } from '../../../entities/entities.module';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/common.UI/dashboard/dashboard.component.html',
    styleUrls: ['app/components/common.UI/dashboard/dashboard.component.css'],
    directives: [ROUTER_DIRECTIVES,
        LoadingComponent,
        WidgetComponent,
        WidgetButtonComponent,
        WidgetHeaderComponent,
        WidgetBodyComponent,
        WidgetFooterComponent]
})

export class DashboardComponent extends BaseComponent {

    constructor() {
        super();
    }

    ngOnInit() {

    }

    protected navigateToProjects() {
        this.routerHelper.navigateTo(FrontEndPages.projects)
    }
}
