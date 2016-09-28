(function() {
    'use strict'
    angular.module('Calendar', [])
        .controller('DateCtrl', DateCtrl)
        .directive('calendar', Calendar)
        .service('CalendarBuilderService', CalendarBuilderService)
        .service('NotesService', NotesService);

    DateCtrl.$inject = ['CalendarBuilderService', 'NotesService'];
    function DateCtrl(CalendarBuilderService, NotesService) {
        var date = this;
        date.today = new Date();
        date.day = new Date();
        date.month = CalendarBuilderService.getDaysInMonth(date.day);
        date.weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        date.nextMonth = function() {
            date.day = new Date(date.day.getFullYear(), date.day.getMonth() + 1, 1);
            date.month = CalendarBuilderService.getDaysInMonth(date.day);
        }
        date.prevMonth = function() {
            date.day = new Date(date.day.getFullYear(), date.day.getMonth() - 1, 1);
            date.month = CalendarBuilderService.getDaysInMonth(date.day);
        }
        date.showDay = function(day) {
            return date.pickedDay = day;
        }
        date.pickedDay = '';
        date.notes = NotesService.getNotes();
    }

    function CalendarBuilderService() {
        var service = this;
        function nextDay(baseDay) {
            return new Date(baseDay.getFullYear(),baseDay.getMonth(),baseDay.getDate() + 1);
        }
        function prevDay(baseDay) {
            return new Date(baseDay.getFullYear(),baseDay.getMonth(),baseDay.getDate() - 1);
        }
        service.getDaysInMonth = function(day) {
            var firstDay = new Date(day.getFullYear(), day.getMonth(), 1)
            var firstDayInCalendar = new Date(firstDay.getFullYear(), firstDay.getMonth(), 1 - firstDay.getDay());
            var lastDay = new Date(day.getFullYear(), day.getMonth() + 1, 0);
            var lastDayInCalendar = new Date(lastDay.getFullYear(), lastDay.getMonth() + 1, 7 - lastDay.getDay());
            var month = [];
            var week = [];
            var numberOfDaysInMonth = (firstDay.getDay() - 1) + lastDay.getDate() + lastDayInCalendar.getDate();
            var currentMonth = false;
            var startDay = firstDayInCalendar;
            for(let j = 0; j < numberOfDaysInMonth / 7; j++) {
                for(let i = 0; i <= 6; i++) {
                    let day = nextDay(startDay);
                    week.push(day);
                    startDay = day;
                }
                month.push(week);
                week = [];
            }
            return month;
        }
    }

    function NotesService() {
        var service = this;
        var notes = {};
        service.getNotes = function() {
            return notes;
        }
        service.saveNote = function(logs) {
            notes = logs;
        }
    }

    function Calendar() {
        var calendar = {
            restrict: 'E',
            templateUrl: './partials/calendar/calendar.html',
        }

        return calendar;
    }
})();
