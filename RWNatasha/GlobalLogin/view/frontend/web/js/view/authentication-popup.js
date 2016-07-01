/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*jshint browser:true jquery:true*/
/*global alert*/
define(
    [
        'jquery',
        'ko',
        'Magento_Ui/js/form/form',
        'Magento_Customer/js/action/login',
        'Magento_Customer/js/customer-data',
        'mage/translate',
        'mage/url',
        'Magento_Ui/js/modal/alert',
        'matchMedia',
        'mage/validation'

    ],
    function($, ko, Component, loginAction, customerData, $t, url, alert, mediaCheck) {
        'use strict';
        var closeBtn = $("#close-login-btn");
        closeBtn.on('click', function () {
            $(this).parent().dropdownDialog("close")
        });
        return Component.extend({
            registerUrl: window.authenticationPopup.customerRegisterUrl,
            forgotPasswordUrl: window.authenticationPopup.customerForgotPasswordUrl,
            autocomplete: window.checkout.autocomplete,
            modalWindow: null,
            isLoading: ko.observable(false),

            defaults: {
                template: 'RWNatasha_GlobalLogin/global-authentication-popup'
            },

            initialize: function() {
                var self = this;
                this._super();
                url.setBaseUrl(window.authenticationPopup.baseUrl);
                loginAction.registerLoginCallback(function() {
                    self.isLoading(false);
                });
            },

            /** Init popup login window */
            afterRender: function (element) {
                var closeBtn = $("#close-login-btn");
                closeBtn.on('click', function () {
                    $(this).parents('#authenticationPopup').dropdownDialog("close")
                });
                mediaCheck({
                    media: '(max-width: 767px)',
                    entry: function () {
                        $('#global-login').appendTo('#store\\.links');
                    },
                    exit: function () {
                        $('#global-login').appendTo('.panel.header');
                    }
                });
            },

            /** Is login form enabled for current customer */
            isActive: function() {
                var customer = customerData.get('customer');
                return customer() == false;
            },

            /** Provide login action */
            login: function(loginForm) {
                var loginData = {},
                    formDataArray = $(loginForm).serializeArray();
                formDataArray.forEach(function (entry) {
                    loginData[entry.name] = entry.value;
                });

                if($(loginForm).validation()
                    && $(loginForm).validation('isValid')
                ) {
                    this.isLoading(true);
                    loginAction(loginData, null, false);
                }
            }
        });
    }
);
