import {Component} from 'angular2/core';
import {ProjectsService} from '../../../services/projects/projects.service';
import {GetProjectsIn, GetProjectsOut} from '../../../classes/classes.module';

@Component({
    selector: 'projects-list',
    inputs: ['model'],
    templateUrl: 'app/components/projects.UI/projects-list/projects-list.component.html',
    providers: [ProjectsService]
})

export class ProjectsListComponent {

    model:any[];

    constructor(private projectsService: ProjectsService) {
        this.model = [];
    }

    ngOnInit() { 
        this.getProjectsFromService(); 
    }

    protected getProjectsFromService(): void {
        let getProjectsIn: GetProjectsIn = new GetProjectsIn();
        this.projectsService.getProjects(getProjectsIn).subscribe(response => this.mapGetProjectsFromService(response));
    }

    protected mapGetProjectsFromService(response: GetProjectsOut): void {
        this.model = response.Projects;
    }
}
