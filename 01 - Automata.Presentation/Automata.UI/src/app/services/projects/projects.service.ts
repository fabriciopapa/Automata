    import { Injectable }     from "angular2/core";
    import { Http, Response } from "angular2/http";
    import 'rxjs/Rx';

    @Injectable()
    export class ProjectsService {

        private heroesUrl = 'http://192.168.1.43:8080/api/Projects/GetProjects';
        private eaea : any;

        constructor (private http: Http) {

        }

        public getProjects() : any{
            return this.http.get(this.heroesUrl).map((res:Response) => this.extractData(res));
        }
        
        private extractData(res: Response) {
            let body = res.json();
            return body.data || { };
        }
    }