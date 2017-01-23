import { Injectable } from "angular2/core";
import { Http, Response } from "angular2/http";
import 'rxjs/Rx';

import { BaseService } from '../services.module';
import { LogInIn, LogInOut, LogOutIn, LogOutOut, SignInIn, SignInOut, GetDashboardIn, GetDashboardOut } from '../../entities/entities.module';
import { Dictionary } from '../../entities/entities.module';

@Injectable()
export class UsersService extends BaseService {

    constructor(http: Http) {
        super(http);
    }

    public logIn(input: LogInIn): any {
        let parameters = new Dictionary<string, LogInIn>();
        parameters.add("input", input);
        let response = this.executeGet("Users", "LogIn", parameters).map(this.mapLogInResponse.bind(this));
        return response;
    }

    private mapLogInResponse(info: any): LogInOut {
        let result = <LogInOut>info;
        return result;
    }

    public logOut(input: LogOutIn): any {
        let parameters = new Dictionary<string, LogOutIn>();
        parameters.add("input", input);
        let response = this.executeGet("Users", "LogOut", parameters).map(this.mapLogOutResponse.bind(this));
        return response;
    }

    private mapLogOutResponse(info: any): LogOutOut {
        let result = <LogOutOut>info;
        return result;
    }

    public signIn(input: SignInIn): any {
        let parameters = new Dictionary<string, SignInIn>();
        parameters.add("input", input);
        let response = this.executeGet("Users", "SignIn", parameters).map(this.mapSignInResponse.bind(this));
        return response;
    }

    private mapSignInResponse(info: any): SignInOut {
        let result = <SignInOut>info;
        return result;
    }

    public getDashboard(input: GetDashboardIn): any {
        let parameters = new Dictionary<string, GetDashboardIn>();
        parameters.add("input", input);
        let response = this.executeGet("Users", "GetDashboard", parameters).map(this.mapSignInResponse.bind(this));
        return response;
    }

    private mapGetDashboardResponse(info: any): GetDashboardOut {
        let result = <GetDashboardOut>info;
        return result;
    }
}