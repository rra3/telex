requirejs.config({
    baseUrl: '../app',
    paths: {
        print: '../lib/print',
        vue: '../components/vue/dist/vue',
        vueRouter:  '../components/vue-router/dist/vue-router'
    }
});
requirejs(['main']);
