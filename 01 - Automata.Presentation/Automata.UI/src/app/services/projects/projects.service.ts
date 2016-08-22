    import { Injectable }     from "angular2/core";
    import { Http, Response } from "angular2/http";

    @Injectable()
    export class ProjectsService {

        private heroesUrl = 'http://localhost:8080/api/Projects/GetProjects';

        constructor (private http: Http) {

        }

        public getProjects() : any{
            this.http.get(this.heroesUrl)
                     .map(this.extractData);
        }
        
        private extractData(res: Response) {
            let body = res.json();
            return body.data || { };
        }
    }