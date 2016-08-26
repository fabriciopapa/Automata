import {Component} from 'angular2/core';
import {LoadingComponent, WidgetBodyComponent, WidgetComponent, WidgetFooterComponent, WidgetHeaderComponent, ProjectsListComponent} from '../../components.module';

@Component({
    selector: 'projects',
    templateUrl: 'app/components/projects.UI/projects/projects.component.html',
    directives: [WidgetBodyComponent, WidgetComponent, WidgetFooterComponent, WidgetHeaderComponent, LoadingComponent, ProjectsListComponent]
})

export class ProjectsComponent {
    
    constructor() {
    }
    
    ngOnInit() {
    }
}
