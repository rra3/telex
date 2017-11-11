requirejs.config({
    baseUrl: '../app',
    paths: {
        print: '../lib/print'
    }
});
requirejs(['main']);
