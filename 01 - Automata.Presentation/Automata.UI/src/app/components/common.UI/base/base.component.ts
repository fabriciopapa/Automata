import { Component, Injector } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Location, Router } from 'angular2/router';
import { ConfigurationManager } from '../../../configurationManager';
import { RouterHelperService, ContextInfoService } from '../../../services/services.module';
import { AppInjector } from '../../../entities/entities.module';

export class BaseComponent {

    private _configurationManager: ConfigurationManager;
    private _routerHelper: RouterHelperService;
    private _contextInfo: ContextInfoService;

    get routerHelper(): RouterHelperService {
        if (!this._routerHelper) {
            this._routerHelper = AppInjector().get(RouterHelperService);
        }

        return this._routerHelper;
    }

    get configurationManager(): ConfigurationManager {
        if (!this._configurationManager) {
            this._configurationManager = new ConfigurationManager();
        }
        return this._configurationManager;
    }

    get contextInfo(): ContextInfoService {
        if (!this._contextInfo) {
            this._contextInfo = AppInjector().get(ContextInfoService);
        }

        return this._contextInfo;
    }

    constructor() {
    }
}
