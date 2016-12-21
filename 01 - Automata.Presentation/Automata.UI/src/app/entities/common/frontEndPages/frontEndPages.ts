export class FrontEndPages {
    static home = "home";
    static logIn = "logIn";
    static signIn = "signIn";
    static dashboard = "dashboard";
    static projects = "projects";

    static getPageByValue(value: string): FrontEndPages {

        let result: FrontEndPages;

        switch (value) {
            case "home":
                result = FrontEndPages.home;
                break;
            case "logIn":
                result = FrontEndPages.logIn;
                break;
            case "signIn":
                result = FrontEndPages.signIn;
                break;
            case "dashboard":
                result = FrontEndPages.dashboard;
                break;
            case "projects":
                result = FrontEndPages.projects;
                break;
        }
        
        return result;
    }
}