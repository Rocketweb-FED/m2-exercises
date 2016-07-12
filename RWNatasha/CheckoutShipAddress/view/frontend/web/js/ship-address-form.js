define([
    'jquery'
],
    function ($) {
        'use strict';

        return function (config, element) {
            var search_area = $('#google-address-search'),
                complete_form = $('#complete-form'),
                buttons =$(element).find('button');
            buttons.on('click', function () {
                buttons.removeClass('active');
                $(this).addClass('active');
                if($(this).hasClass('google-auto-address')){
                    //show search input
                    search_area.show();
                } else {
                    search_area.hide();
                    complete_form.show();
                }

            });
        };
    }
);