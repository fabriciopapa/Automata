import { Component, EventEmitter } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { LogInOut } from '../../../entities.module';

export class LogInResultEvent {
    result: LogInOut;
}