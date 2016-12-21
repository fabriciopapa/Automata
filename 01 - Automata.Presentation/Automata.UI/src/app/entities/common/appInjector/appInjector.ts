import { Injector } from 'angular2/core';

if (!window.icb) {
    window.icb = {
        routerHelper: {},
        unity: {},
        appInjector: {}
    };
}

export const AppInjector = (injector?: Injector): Injector => {
    if (injector) {
        window.icb.appInjector.appInjectorReference = injector;
    }

    return window.icb.appInjector.appInjectorReference;
};
