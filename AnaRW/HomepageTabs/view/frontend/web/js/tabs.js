define([
    'jquery',
    'mage/tabs'
], function ($) {
    return function (config, element) {
        $(element).tabs(config);
    }
});