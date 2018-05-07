let newcalendar = new Calendar(2018, 5);
let newViewcalendar = new ViewCalendar('.ts-calendar__wrapper', newcalendar);
newViewcalendar.render();
let newControllerCalendar = new Controller(newcalendar, newViewcalendar);
newControllerCalendar.setPrevMonth();
newControllerCalendar.setNextMonth();