import { Project } from '../../../entities/entities.module';

export class GetProjectsOut {
    private _projects : Project[];

    get Projects(): Project[] { return this._projects; }
    set Projects(value: Project[]) { this._projects = value; }

    public GetProjectsOut(){
        this._projects = [];
    }
}