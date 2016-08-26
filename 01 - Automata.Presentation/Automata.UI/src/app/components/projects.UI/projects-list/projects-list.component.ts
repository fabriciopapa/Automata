import {Component} from 'angular2/core';
import {ProjectsService} from '../../../services/projects/projects.service';

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

    ngOnInit() { this.getHeroes(); }

    getHeroes() {
        var ea : any;

        this.projectsService.getProjects().subscribe();
  }
}
