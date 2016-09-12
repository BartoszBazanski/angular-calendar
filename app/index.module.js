(function(){
    angular.module('angularCalendar',[])
        .controller('CalendarController', function(){
            var calendar = this;
            calendar.day = new Date(2015, 6, 14);
            calendar.firstDayOfMonth = new Date(calendar.day.getFullYear(), calendar.day.getMonth(), 1);
            calendar.lastDayOfMonth = new Date(calendar.day.getFullYear(), calendar.day.getMonth() + 1, 0);
            calendar.currentMonth = getDaysFromMonth();
            calendar.firstWeek = getFirstWeekFromMonth();
            calendar.weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

            function getDaysFromMonth() {
                var month = [];
                for(var i = 0; i < calendar.lastDayOfMonth.getDate(); i++){
                    month.push(new Date(calendar.firstDayOfMonth.getFullYear(), calendar.firstDayOfMonth.getMonth(), calendar.firstDayOfMonth.getDate() + i));
                }
                return month;
            }

            function getFirstWeekFromMonth() {
                var firstWeek = [];
                if(calendar.firstDayOfMonth.getDay() > 1) {
                    for(var j = (calendar.firstDayOfMonth.getDay() - 2) * (-1); j <= 0; j++) {
                        firstWeek.push(new Date(calendar.firstDayOfMonth.getFullYear(), calendar.firstDayOfMonth.getMonth(), j));
                    }
                }
                for(var k = 0; k <= 7 - calendar.firstDayOfMonth.getDay(); k++) {
                    firstWeek.push(new Date(calendar.firstDayOfMonth.getFullYear(), calendar.firstDayOfMonth.getMonth(), k + 1));
                }
                return firstWeek;
            }
        });
})();
