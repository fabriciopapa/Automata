import { Injectable } from "angular2/core";
import { Router, RouteDefinition } from 'angular2/router';

import { FrontEndPages } from "../../../entities/entities.module";

@Injectable()
export class RouterHelperService {

    constructor(router: Router) {
        if (!window.automata.routerHelper.router) {
            window.automata.routerHelper.router = router;
        }
    }

    get router() {
        return window.automata.routerHelper.router;
    }

    addConfiguration(definitions: RouteDefinition[]) {
        window.automata.routerHelper.router.config(definitions);
    }

    public navigateTo(page: FrontEndPages, linkParams?: any) {
        setTimeout(() => {
            if (!window.automata.routerHelper.router.navigating) {
                let navigateToPage: string = page.toString().charAt(0).toUpperCase() + page.toString().slice(1);
                window.automata.routerHelper.router.navigate([navigateToPage, linkParams]);
            }
        }, 100);
    }

    public navigateByUrl(url: string) {
        setTimeout(() => {
            if (!window.automata.routerHelper.router.navigating) {
                window.automata.routerHelper.router.navigateByUrl(url);
            }
        }, 100);
    }
}
