import { Injectable } from "angular2/core";
import { Http, Response } from "angular2/http";
import 'rxjs/Rx';

import { BaseService } from '../services.module';
import { Project, GetProjectsIn, GetProjectsOut, Dictionary } from '../../entities/entities.module'

@Injectable()
export class ProjectsService extends BaseService {

    constructor(http: Http) {
        super(http);
    }

    public getProjects(input: GetProjectsIn): any {
        let parameters = new Dictionary<string, GetProjectsIn>();
        parameters.add("input", input);
        let response = this.executeGet("Projects", "GetProjects", parameters).map(this.mapGetProjectsResponse.bind(this));
        return response;
    }

    private mapGetProjectsResponse(info: any): GetProjectsOut {
        let result = <GetProjectsOut>info;
        return result;
    }
}