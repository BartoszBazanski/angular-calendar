(function(){
    var dayInMilisec = 86400000;
    var app = angular.module('angularCalendar',[]);
    app.controller('CalendarController', function(){
        this.day = today;
        this.dayInMilisec = dayInMilisec;
        this.firstDayOfMonth = today.date - (firstDayOfMonth.getDate() - 1) * dayInMilisec;
        this.months = months;
    });
    var arrayOfNumbers = function(number){
        var array = [];
        for(var i = 1; i <= number; i++){
            array.push(i);
        }
        return array;
    }
    var today = {
        date: Date.now(),
        weekDay: 'Thursday'
    }
    var months = {
        january: arrayOfNumbers(31),
        february: arrayOfNumbers(29),
        march: arrayOfNumbers(31),
        april: arrayOfNumbers(30),
        may: arrayOfNumbers(31),
        june: arrayOfNumbers(30),
        july: arrayOfNumbers(31),
        august: arrayOfNumbers(31),
        september: arrayOfNumbers(30),
        october: arrayOfNumbers(31),
        november: arrayOfNumbers(30),
        december: arrayOfNumbers(31)
    }
    var firstDayOfMonth = new Date(today.date);
})();
