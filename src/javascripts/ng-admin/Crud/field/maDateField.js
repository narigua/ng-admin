/*global define*/

define(function (require) {
    'use strict';

    /**
     * Edition field for a date - a text input with a datepicker.
     *
     * @example <ma-date-field field="field" value="value"></ma-date-field>
     */
    function maDateField() {
        return {
            scope: {
                'field': '&',
                'value': '='
            },
            restrict: 'E',
            link: function(scope, element) {
                var field = scope.field();
                scope.name = field.name();
                scope.format = field.format();
                scope.v = field.validation();
                scope.isOpen = false;
                var input = element.find('input').eq(0);
                var attributes = field.attributes();
                for (var name in attributes) {
                    input.attr(name, attributes[name]);
                }
                scope.toggleDatePicker = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    scope.isOpen = !scope.isOpen;
                };
            },
            template:
'<div class="input-group datepicker">' +
    '<input type="text" ng-model="value" id="{{ name }}" name="{{ name }}" class="md-input" ' +
           'datepicker-popup="{{ format }}" is-open="isOpen" close-text="Close" ' +
           'ng-required="v.required" />' +
    '<span class="input-group-btn">' +
        '<md-button type="button" class="md-button" ng-click="toggleDatePicker($event)" aria-label="DatePicker"><i class="glyphicon glyphicon-calendar"></i></md-button>' +
    '</span>' +
'</div>'
        };
    }

    maDateField.$inject = [];

    return maDateField;
});
