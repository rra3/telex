requirejs.config({
    baseUrl: 'client/app',
    paths: {
        print: '../lib/print'
    }
});
requirejs(['main']);
