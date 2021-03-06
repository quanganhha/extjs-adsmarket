Ext.define('Admin.view.ads.OfferDetails', {
    extend: 'Ext.form.Panel',
    xtype: 'offer-details',

    controller: 'offer-details',

    title: 'Details',
    padding: 10,
    bodyPadding: 10,

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

    layout: 'responsivecolumn',

    items: [
        {
            xtype: 'container',

            // Use 50% of container when viewport is big enough, 100% otherwise
            userCls: 'big-20 small-100',

            layout: {
                type: 'vbox',
                align: 'center'
            },
            
            items: [{
                xtype: 'displayfield',
                name: 'thumb',
                renderer: function (value, field) {
                    return '<img class="app-image" src="resources/images/apps/' + value + '" />';
                }
            }, {
                xtype: 'displayfield',
                name: 'name',
                fieldCls: 'title'
            }]
        },
        {
            xtype: 'container',

            userCls: 'big-80 small-100',

            defaults: {
                anchor: '100%',
                labelWidth: 150
            },
            defaultType: 'displayfield',

            items: [{
                fieldLabel: 'Status',
                name: 'status',
                renderer: function (value, field) {
                    if (value == 'STOPPED') {
                        return '<i class="fa fa-circle text-orange"></i> ' + value;
                    } else {
                        return '<i class="fa fa-circle text-green"></i> ' + value;
                    }
                }
            }, {
                fieldLabel: 'Payout',
                name: 'price',
                fieldCls: 'price',
                renderer: function (value, field) {
                    return Ext.util.Format.currency(value, '₫', 0, true);
                }
            }, {
                fieldLabel: 'Platform',
                name: 'platform',
                renderer: function (value, field) {
                    if (value == 'Android') {
                        return '<i class="fa fa-android"></i> ' + value;
                    } else if (value == 'iOS') {
                        return '<i class="fa fa-apple"></i> ' + value;
                    } else {
                        return '<i class="fa fa-windows"></i> ' + value;
                    }
                }
            }, {
                fieldLabel: 'Region',
                name: 'region',
                renderer: function (value, field) {
                    return '<i class="fa fa-globe"></i> ' + value;
                }
            }, {
                fieldLabel: 'CAP',
                name: 'cap'
            }, {
                fieldLabel: 'Type',
                name: 'type',
                fieldCls: 'type-incentive'
            }, {
                fieldLabel: 'Start Time (UTC)',
                name: 'start_date'
            }, {
                fieldLabel: 'End Time (UTC)',
                name: 'end_date'
            }, {
                fieldLabel: 'Requirement',
                name: 'requirement'
            }, {
                fieldLabel: 'Description',
                name: 'description'
            }]
        }
    ],

    buttons: [{
        text: 'Request Tracking Link'
    }]
    
});
