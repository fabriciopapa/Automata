import {Component} from 'angular2/core';

@Component({
    selector: 'projects-list',
    inputs: ['model'],
    templateUrl: 'app/components/projects/projectsList/projectsList.html'
})

export class ProjectsList {

    model:any[];

    constructor() {
        this.model = [];
    }
}
