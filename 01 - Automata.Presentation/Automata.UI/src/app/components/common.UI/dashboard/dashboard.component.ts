import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Router } from 'angular2/router';

import { BaseComponent, LoadingComponent, WidgetComponent, WidgetButtonComponent, 
    WidgetHeaderComponent, WidgetBodyComponent, WidgetFooterComponent } from '../../components.module';
import { FrontEndPages, GetDashboardIn, GetDashboardOut, OperationResult } from '../../../entities/entities.module';
import { UsersService } from '../../../services/services.module';

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
        WidgetFooterComponent],
    providers: [
        UsersService
    ]
})

export class DashboardComponent extends BaseComponent {
    protected _usersService: UsersService;
    protected _projectsCount: number = 0;
    protected _pagesCount: number = 0;
    protected _methodsCount: number = 0;
    protected _testsCount: number = 0;

    get projectsCount(): number { return this._projectsCount; }
    get pagesCount(): number { return this._pagesCount; }
    get methodsCount(): number { return this._methodsCount; }
    get testsCount(): number { return this._testsCount; }

    constructor(usersService: UsersService) {
        super();
        this._usersService = usersService;
        this.getDashboard();
    }

    protected getDashboard() {
        let input: GetDashboardIn = new GetDashboardIn();
        input.UserId = this.contextInfo.user.PK_Id;
        this._usersService.getDashboard(input).subscribe(this.mapGetDashboardResponse.bind(this));
    }

    protected mapGetDashboardResponse(result: GetDashboardOut) {
        if (result.OperationResult == OperationResult.Success) {
            this._projectsCount = result.ProjectsCount;
            this._pagesCount = result.PagesCount;
            this._methodsCount = result.MethodsCount;
            this._testsCount = result.TestsCount;
        }
    }

    protected navigateToProjects() {
        this.contextInfo.dashboardOption = FrontEndPages.projects.toString();
        this.routerHelper.navigateTo(FrontEndPages.projects)
    }
}
