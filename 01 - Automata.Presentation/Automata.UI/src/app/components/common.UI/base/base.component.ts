import {Component} from 'angular2/core';
import {AppConfig} from '../../../appConfig'

export class BaseComponent {

    private _appConfig : AppConfig;

    get AppConfig() { return this._appConfig; }

    constructor() {
        this._appConfig = new AppConfig();
    }
}
