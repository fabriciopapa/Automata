import {Component} from 'angular2/core';
import {ProjectsService} from '../../../services/projects/projects.service'

@Component({
    selector: 'projects-list',
    inputs: ['model'],
    templateUrl: 'app/components/projects/projectsList/projectsList.html',
    providers: [ProjectsService]
})

export class ProjectsList {

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
