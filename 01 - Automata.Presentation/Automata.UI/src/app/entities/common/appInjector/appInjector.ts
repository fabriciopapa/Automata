import { Injector } from 'angular2/core';

if (!window.automata) {
    window.automata = {
        routerHelper: {},
        appInjector: {}
    };
}

export const AppInjector = (injector?: Injector): Injector => {
    if (injector) {
        window.automata.appInjector.appInjectorReference = injector;
    }

    return window.automata.appInjector.appInjectorReference;
};
