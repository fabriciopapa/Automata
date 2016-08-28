import { Injectable }     from "angular2/core";
import { Http, Response } from "angular2/http";
import 'rxjs/Rx';
import {BaseService} from '../services.module';

@Injectable()
export class ProjectsService extends BaseService {

    constructor () {
        super();
    }

    public getProjects() : any{
        // return this.executeGet('Projects', 'GetProjects').map((res:Response) => this.extractData(res));
        return null;
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
}