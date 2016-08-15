import {Component} from 'angular2/core';

import {RdLoading} from '../rd-loading/rd-loading';
import {RdWidget} from '../rd-widget/rd-widget';

import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from '../rd-widget-footer/rd-widget-footer';

import {ServerListView} from '../server-list-view/server-list-view';
import {ServerListService} from '../../services/server_list';


@Component({
    selector: 'sidebar',
    providers: [ServerListService],
    templateUrl: 'app/components/sidebar/sidebar.html',
    directives: [RdWidget, RdWidgetHeader, RdWidgetBody, RdWidgetFooter, RdLoading, ServerListView]
})

export class Sidebar {
    
    toggle:boolean = false;

    constructor() {
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