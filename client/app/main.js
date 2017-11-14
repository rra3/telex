'use strict';

define(function (require) {
    var print = require('print');
    print('hello world from main.js!');
    var vue = require('vue');
    var VueRouter = require('vueRouter');
    var router = new VueRouter();
    console.log('vue is: %o', vue);
    console.log('vue router is: %o', router);
});
