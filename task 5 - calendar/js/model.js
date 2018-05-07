function Calendar(year, month) {
    this.date = new Date(year, month-1);
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();	
}

Calendar.prototype.getWeekDay = function() {
    return this.date.getDay();
}

Calendar.prototype.daysInMonth = function() {
    return 32 - new Date(this.year, this.month, 32).getDate();
}

Calendar.prototype.prevMonth = function() {
    this.date = new Date(this.year, this.month-1);
    this.month = this.date.getMonth();
}

Calendar.prototype.nextMonth = function() {
    this.date = new Date(this.year, this.month+1);
    this.month = this.date.getMonth();
}