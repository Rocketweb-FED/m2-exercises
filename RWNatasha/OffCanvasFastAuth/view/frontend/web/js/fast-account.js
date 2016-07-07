define([
        'jquery'
    ],
    function ($) {
        'use strict';

        return function (config, element) {
            $(element).on('click', '.open-another', function (event) {
                event.preventDefault();
                $('#authPopups').find('.off-canvas-popup-item').toggleClass('_show');
            });
        };
    }
);