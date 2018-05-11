function Generator() {
}

Generator.prototype.createCalendar = function(year, month, appendPlaceClass) {
    this.year = year;
    this.month = month;
    let newcalendar = new Calendar(year, month);
    let newViewcalendar = new ViewCalendar(appendPlaceClass, newcalendar);
    newViewcalendar.render();
}