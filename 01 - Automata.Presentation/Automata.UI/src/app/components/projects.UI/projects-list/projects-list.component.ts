import {Component} from 'angular2/core';
import {ProjectsService} from '../../../services/projects/projects.service';
import {GetProjectsIn, GetProjectsOut} from '../../../entities/entities.module';
import {LoadingComponent, WidgetBodyComponent, WidgetComponent, WidgetFooterComponent, WidgetHeaderComponent, ErrorComponent} from '../../components.module';

@Component({
    selector: 'projects-list',
    inputs: ['model'],
    templateUrl: 'app/components/projects.UI/projects-list/projects-list.component.html',
    styleUrls: ['app/components/projects.UI/projects-list/projects-list.component.css'],
    providers: [ProjectsService],
    directives: [WidgetBodyComponent, WidgetComponent, WidgetFooterComponent, WidgetHeaderComponent, LoadingComponent, ErrorComponent]
})

export class ProjectsListComponent {

    private _projectsList: any[];
    private _isLoading: boolean;
    private _isError: boolean;
    private _errorMessage: string;

    get projectsList(): any[] { return this._projectsList; }
    get isLoading(): boolean { return this._isLoading; }
    get isError(): boolean { return this._isError; }
    get errorMessage(): string { return this._errorMessage; }

    constructor(private projectsService: ProjectsService) {
        this.initialize();
    }

    protected initialize() { 
        this._projectsList = [];
        this._isLoading = false;
        this._isError = false;
        this._errorMessage = '';
        this.getProjectsFromService();
    }

    protected getProjectsFromService(): void{
        this._isLoading = true;
        this._isError = false;
        let getProjectsIn: GetProjectsIn = new GetProjectsIn();
        this.projectsService.getProjects(getProjectsIn).subscribe((response: GetProjectsOut) => this.mapGetProjectsFromService(response),
                                                                  (error: any) => this.processGetProjectsFromServiceError(<any>error));
    }

    protected mapGetProjectsFromService(response: GetProjectsOut): void{
        this._isLoading = false;
        this._projectsList = response.Projects;
    }

    protected processGetProjectsFromServiceError(error: any): void{
        this._isLoading = false;
        this._isError = true;
        this._errorMessage = error;
    }

    protected processSave(): void{
        let auxProjectList = this._projectsList;
    }
}
