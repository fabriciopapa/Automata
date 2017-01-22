import { Injectable } from 'angular2/core';

import { ConfigurationManager } from '../../../configurationManager';
import { User, FrontEndPages } from '../../../entities/entities.module';

@Injectable()
export class ContextInfoService {
    
    static _user: User;
    static _userIsAuthenticated: boolean;
    static _isLoading: boolean;
    static _dashboardOption: string = FrontEndPages.home.toString();
    
    constructor() {
    }

    get user(): User {
        return ContextInfoService._user;
    }

    set user(user: User) {
        ContextInfoService._user = user;
    }

    get userIsAuthenticated(): boolean {
        return ContextInfoService._userIsAuthenticated;
    }

    set userIsAuthenticated(value: boolean) {
        ContextInfoService._userIsAuthenticated = value;
    }

    get isLoading(): boolean {
        return ContextInfoService._isLoading;
    }

    set isLoading(value: boolean) {
        ContextInfoService._isLoading = value;
    }

    get dashboardOption(): string {
        return ContextInfoService._dashboardOption;
    }

    set dashboardOption(value: string) {
        ContextInfoService._dashboardOption = value;
    }
}
