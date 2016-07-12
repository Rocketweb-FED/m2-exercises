define(
    [
        'jquery',
        'underscore',
        'uiCollection',
        'ko'
    ],
    function (
        $,
        _,
        Component,
        ko
        ) {
        'use strict';


        return Component.extend({
            defaults: {
                template: 'RWNatasha_CheckoutShipAddress/shipping-address/additional_fieldsets'
            },
            additionalIndex:  0,

            /**
             * @return {exports}
             */
            initialize: function () {
                this._super();
                return this;
            },

            getNamesArea: function() {
                this.additionalIndex = this.getAdditionalIndex();
                return this.elems.slice(0,this.additionalIndex);
            },

            getAddressArea: function() {
                var length = this.elems().length;
                return this.elems.slice(this.additionalIndex,length);
            },

            getAdditionalIndex: function() {
                var array = this.elems();
                for (var i = 0, j = array.length; i < j; i++) {
                    if(array[i].dataScope.match(/street|company|city/) !== null) {
                        return i;
                    }
                }
                return -1;
            }
    });
});
