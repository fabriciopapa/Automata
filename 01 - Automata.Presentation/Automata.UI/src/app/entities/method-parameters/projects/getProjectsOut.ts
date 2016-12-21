import { Project } from '../../../entities/entities.module';
import { BaseMethodOut } from '../../entities.module';

export class GetProjectsOut extends BaseMethodOut {
    private _projects : Project[];

    get Projects(): Project[] { return this._projects; }
    set Projects(value: Project[]) { this._projects = value; }

    public GetProjectsOut(){
        this._projects = [];
    }
}