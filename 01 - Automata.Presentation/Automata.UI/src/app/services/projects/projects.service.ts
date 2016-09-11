import {Injectable}     from "angular2/core";
import {Http, Response} from "angular2/http";
import 'rxjs/Rx';

import {BaseService} from '../services.module';
import {Project} from '../../entities/entities.module'
import {GetProjectsIn, GetProjectsOut} from '../../classes/classes.module'

@Injectable()
export class ProjectsService extends BaseService {

    constructor(http: Http) {
        super(http);
    }

    public getProjects(input: GetProjectsIn): any{
        return this.executeGet('Projects', 'GetProjects').map((res:Response) => this.extractGetProjects(res));
    }
    
    private extractGetProjects(res: Response): GetProjectsOut{
        let body = res.json();
        let output = new GetProjectsOut();
        output.Projects = [];

        for(let i:number = 0; i < body.Projects.length; i++){
            let project = new Project();
            project.Id = body.Projects[i].Id;
            project.Name = body.Projects[i].Name;
            project.Url = body.Projects[i].Url;
            output.Projects.push(project);
        }

        return output;
    }
}