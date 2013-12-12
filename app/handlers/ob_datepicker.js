define(['durandal/system', 'durandal/composition', 'knockout','jqueryui'],
    function (system, composition, ko, jqueryui) {
        ko.bindingHandlers.obdatepicker = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                //initialize datepicker with some optional options
                var options = allBindingsAccessor().datepickerOptions || {},
                    $el = $(element),
                    modelValue = valueAccessor(),
                    elementValue = ko.selectExtensions.readValue(element);

                $el.datepicker(options);
                system.log('datepicker - ' + $el.id);
                system.log('modelValue:' + modelValue);

                //handle the field changing
                ko.utils.registerEventHandler(element, "change", function () {
                    // TODO: determine which property needs to be set.
                    system.log('datePicker value: ' + $el.datepicker("getDate") );
                    viewModel[modelValue] = $el.val();
                    //modelValue = $el.val();
                });

                //handle disposal (if KO removes by the template binding)
                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    $el.datepicker("destroy");
                });

            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                var modelValue = valueAccessor,
                    value = viewModel[modelValue],
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

        };
    });