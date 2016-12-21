import { Injectable } from 'angular2/core';

import { ConfigurationManager } from '../../../configurationManager';
import { User } from '../../../entities/entities.module';

@Injectable()
export class ContextInfoService {
    
    static _user: User;
    static _userIsAuthenticated: boolean;
    
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
}
