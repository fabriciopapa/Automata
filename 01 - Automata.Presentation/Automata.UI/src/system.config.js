System.config({
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
System.import('app/app')
    .then(null, console.error.bind(console));