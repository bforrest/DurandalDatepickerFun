define(['durandal/system', 'durandal/composition', 'knockout','jqueryui', 'plugins/observable'],
    function (system, composition, ko, jqueryui, observable) {
        composition.addBindingHandler('obdatepicker', {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                //initialize datepicker with some optional options
                var options = allBindingsAccessor().datepickerOptions || {},
                    $el = $(element);
                    $valueAccessor = valueAccessor;

                $el.datepicker(options);
                system.log('datepicker - ' + $el.id);
                //handle the field changing
                ko.utils.registerEventHandler(element, "change", function () {
                    var id = $el.attributes["data-bind"].ownerelement;

                    var obs = allBindingsAccessor();
                    obs = $el.datepicker("getDate"); 
                });

                //handle disposal (if KO removes by the template binding)
                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    $el.datepicker("destroy");
                });

            },
            update: function (element, valueAccessor) {
                var value = ko.utils.unwrapObservable(valueAccessor()),
                    $el = $(element);
                system.log('datepicker update - value: ' + value + ', $el: ' + $el.id);
                //handle date data coming via json from Microsoft
                if (String(value).indexOf('/Date(') == 0) {
                    value = new Date(parseInt(value.replace(/\/Date\((.*?)\)\//gi, "$1")));
                }

                var current = $el.datepicker("getDate");

                if (value - current !== 0) {
                    $el.datepicker("setDate", value);
                }
            }
        });
    });