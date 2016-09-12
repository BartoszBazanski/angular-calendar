(function(){
    angular.module('angularCalendar',[])
        .controller('CalendarController', function(){
            var calendar = this;
            calendar.day = new Date();
            calendar.firstDayOfMonth = new Date(calendar.day.getFullYear(), calendar.day.getMonth(), 1);
            calendar.lastDayOfMonth = new Date(calendar.day.getFullYear(), calendar.day.getMonth() + 1, 0);
            calendar.currentMonth = getDaysFromMonth();
            calendar.weeks = buildWeeks(calendar.firstDayOfMonth);
            calendar.weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            function getDaysFromMonth() {
                var month = [];
                for(var i = 0; i < calendar.lastDayOfMonth.getDate(); i++){
                    month.push(new Date(calendar.firstDayOfMonth.getFullYear(), calendar.firstDayOfMonth.getMonth(), calendar.firstDayOfMonth.getDate() + i));
                }
                return month;
            }

            function getFirstWeekFromMonth() {
                var firstWeek = [];
                if(calendar.firstDayOfMonth.getDay() > 0) {
                    for(var j = (calendar.firstDayOfMonth.getDay() - 1) * (-1); j <= 0; j++) {
                        firstWeek.push(new Date(calendar.firstDayOfMonth.getFullYear(), calendar.firstDayOfMonth.getMonth(), j));
                    }
                }
                for(var k = 0; k <= 6 - calendar.firstDayOfMonth.getDay(); k++) {
                    firstWeek.push(new Date(calendar.firstDayOfMonth.getFullYear(), calendar.firstDayOfMonth.getMonth(), k + 1));
                }
                console.log(firstWeek);
                return firstWeek;
            }
            function buildWeeks(firstDay){
                var day;
                var week = [];
                var weeks = [];

                var lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0);
                for(var i = 1; i <= lastDay.getDate(); i++) {
                    day = new Date(firstDay.getFullYear(), firstDay.getMonth(), i);
                    if(day.getDay() === 6) {
                        week.push(day);
                        weeks.push(week);
                        week = [];
                    } else {
                        week.push(day);
                    }
                }
                weeks.push(week);

                var lastWeek = weeks[weeks.length - 1];
                var firstWeek = weeks[0];
                var restDays = [];

                if(firstWeek[0].getDay() > 0){
                    for(var j = (firstWeek[0].getDay() - 1) * (-1); j <= 0; j++) {
                        restDays.push(new Date(firstWeek[0].getFullYear(), firstWeek[0].getMonth(), j));
                    }
                    firstWeek.forEach(function(day) {restDays.push(day)});
                    weeks[0] = restDays;
                    restDays = [];
                };
                if(lastWeek[lastWeek.length - 1].getDay() < 6) {
                    for (var k = 0; k < (6 - lastWeek[lastWeek.length - 1].getDay()) ; k++) {
                        restDays.push(new Date(lastWeek[lastWeek.length - 1].getFullYear(), lastWeek[lastWeek.length - 1].getMonth() + 1, k + 1))
                    }
                    restDays.forEach(function(day) {lastWeek.push(day)});
                    restDays = [];
                }
                return weeks;
            }
        });
})();
