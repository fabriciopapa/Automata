import {Component, Input} from 'angular2/core';

@Component({
    selector: 'widget-header',
    templateUrl: 'app/components/common.UI/widget-header/widget-header.component.html'
})

export class WidgetHeaderComponent {
    @Input()
    title:string;

    @Input()
    icon:string;

    constructor() {
        this.title = '';
        this.icon = '';
    }
}
