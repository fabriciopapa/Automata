import {Component, Input} from 'angular2/core';

@Component({
    selector: 'widget-body',
    properties: ['loading', 'classes'],
    templateUrl: 'app/components/common.UI/widget-body/widget-body.component.html'
})

export class WidgetBodyComponent {
    @Input()
    loading:boolean;

    @Input()
    classes:string;

    constructor() {
        this.loading = false;
        this.classes = '';
    }
}
