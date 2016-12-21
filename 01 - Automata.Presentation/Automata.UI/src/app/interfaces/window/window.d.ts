interface ICB {
    routerHelper: any;
    unity: any;
    appInjector: any;
}

/**
 * @interface Window
 * Add in this interface the properties and the specification of the methods that need
 * to be globally available for the app
 */
interface Window{
	/**
	 * Object that stores locales data such as translations...
	 */
    locales: any;
    masks: any;
    System: any;
	WebKitCSSMatrix: any;

    contextInfo: any;

    //ReCaptcha component
    grecaptcha: any;
    verifyCallback: any;

    urlVersion(url: string): string   

    icb: ICB;

    clone: any;
}
