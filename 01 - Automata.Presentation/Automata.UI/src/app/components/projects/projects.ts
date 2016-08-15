import {Component} from 'angular2/core';

import {RdLoading} from '../rd-loading/rd-loading';
import {RdWidget} from '../rd-widget/rd-widget';

import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from '../rd-widget-footer/rd-widget-footer';

import {ServerListView} from '../server-list-view/server-list-view';
import {ServerListService} from '../../services/server_list';

import { ProjectsList } from './projects.module'

@Component({
    selector: 'projects',
    providers: [ServerListService],
    templateUrl: 'app/components/projects/projects.html',
    directives: [RdWidget, RdWidgetHeader, RdWidgetBody, RdWidgetFooter, RdLoading, ProjectsList]
})

export class Projects {
    _servers:any[];
    _serverListService:ServerListService;

    constructor(private serverListService:ServerListService) {
        this._servers = this.serverListService.all();
    }
    
    ngOnInit() {
        
    }
}
