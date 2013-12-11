define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
	 return {
        displayName: 'Pick A Date',
        chosenDate: ko.observable(),
        activate: function () {
        }
    };
});