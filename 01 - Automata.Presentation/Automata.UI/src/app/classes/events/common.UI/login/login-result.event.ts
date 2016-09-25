import {Component, EventEmitter} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

export class LoginResultEvent {
    result: boolean;
    user : string;
    password : string;
}