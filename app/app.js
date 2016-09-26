(function() {
    'use strict'
    angular.module('Calendar', [])
        .controller('DateCtrl', DateCtrl)
        .directive('calendar', Calendar)
        .service('CalendarBuilderService', CalendarBuilderService);

    DateCtrl.$inject = ['CalendarBuilderService'];
    function DateCtrl(CalendarBuilderService) {
        var date = this;
        date.today = new Date();
        date.day = new Date();
        console.log(date.day);
        date.nextMonth = function() {
            date.day = new Date(date.day.getFullYear(), date.day.getMonth() + 1, 1);
        }
        date.prevMonth = function() {
            date.day = new Date(date.day.getFullYear(), date.day.getMonth() - 1, 1);
        }
        // date.firstDay = CalendarBuilderService.getFirstDay(date.today);
        // date.lastDay = CalendarBuilderService.getLastDay(date.today);
    }

    function CalendarBuilderService() {
        var service = this;
        service.getFirstDay = function(day) {
            var firstDay = new Date(day.getFullYear(), day.getMonth(), 1);
            return firstDay;
        }
        service.getLastDay = function(day) {
            var lastDay = new Date(day.getFullYear(), day.getMonth() + 1, 0);
            return lastDay;
        }
    }

    Calendar.$inject = ['CalendarBuilderService'];
    function Calendar(CalendarBuilderService) {
        var calendar = {
            restrict: 'E',
            templateUrl: './partials/calendar/calendar.html',
            scope: {
                day: '='
            },
            controller: CalendarDirectiveCtrl,
            controllerAs: 'calendar',
            bindToController: true
        }

        return calendar;
    }
    DateCtrl.$inject = ['CalendarBuilderService'];
    function CalendarDirectiveCtrl(CalendarBuilderService) {
        var calendar = this;
        console.log(calendar.day);
        // calendar.day = 'Hi';
        console.log(calendar.day);
        // calendar.firstDay = function() {
        //         return CalendarBuilderService.getFirstDay(calendar.day);
        // }
        // calendar.lastDay = function() {
        //     return CalendarBuilderService.getLastDay(calendar.day);
        // }

    }
})();
