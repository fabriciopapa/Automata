import { Injectable } from "angular2/core";
import { Router, RouteDefinition } from 'angular2/router';

import { FrontEndPages } from "../../../entities/entities.module";

@Injectable()
export class RouterHelperService {

    constructor(router: Router) {
        if (!window.icb.routerHelper.router) {
            window.icb.routerHelper.router = router;
        }
    }

    get router() {
        return window.icb.routerHelper.router;
    }

    addConfiguration(definitions: RouteDefinition[]) {
        window.icb.routerHelper.router.config(definitions);
    }

    public navigateTo(page: FrontEndPages, linkParams?: any) {
        setTimeout(() => {
            if (!window.icb.routerHelper.router.navigating) {
                let navigateToPage: string = page.toString().charAt(0).toUpperCase() + page.toString().slice(1);
                window.icb.routerHelper.router.navigate([navigateToPage, linkParams]);
            }
        }, 100);
    }

    public navigateByUrl(url: string) {
        setTimeout(() => {
            if (!window.icb.routerHelper.router.navigating) {
                window.icb.routerHelper.router.navigateByUrl(url);
            }
        }, 100);
    }
}
