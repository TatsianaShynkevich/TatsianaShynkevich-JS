function Controller(customCalendar, customCalendarView) {
	this.customCalendar = customCalendar;
	this.customCalendarView = customCalendarView;
}

Controller.prototype.setPrevMonth = function() {
var btnPrevMonth = document.querySelector('.ts-btn_backward-button');
  btnPrevMonth.addEventListener('click', function() {
  this.customCalendar.prevMonth();
  this.customCalendarView.render();
});
}

Controller.prototype.setNextMonth = function() {
var btnNextMonth = document.querySelector('.ts-btn_forward-button');
  btnNextMonth.addEventListener('click', function() {
  this.customCalendar.nextMonth();
  this.customCalendarView.render();
});
}