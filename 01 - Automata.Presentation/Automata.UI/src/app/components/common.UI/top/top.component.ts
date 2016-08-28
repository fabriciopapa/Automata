import {Component, EventEmitter} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {BaseComponent, LoadingComponent, WidgetComponent, WidgetButtonComponent, WidgetHeaderComponent, WidgetBodyComponent, WidgetFooterComponent} from '../../components.module'

@Component({
    selector: 'top',
    templateUrl: 'app/components/common.UI/top/top.component.html',
    directives: [ROUTER_DIRECTIVES, LoadingComponent, WidgetComponent, WidgetButtonComponent, WidgetHeaderComponent, WidgetBodyComponent, WidgetFooterComponent]
})

export class TopComponent extends BaseComponent {
    
    constructor() {
        super();
    }
}
