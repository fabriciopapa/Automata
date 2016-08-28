import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Location} from 'angular2/router';
import {ConfigurationManager} from '../../../configurationManager'

export class BaseComponent {

    private _configurationManager : ConfigurationManager;

    get ConfigurationManager() { return new ConfigurationManager(); }

    constructor() {
    }
}
