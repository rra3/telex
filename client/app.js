requirejs.config({
    baseUrl: '../app',
    paths: {
        print: '../lib/print',
        vue: '../components/vue/dist/vue'
    }
});
requirejs(['main']);
