function ViewCalendar(wrapperClass, customCalendar) {
	this.wrapperClass = wrapperClass;
	this.customCalendar = customCalendar;
}

ViewCalendar.prototype.render = function() {
    let wrapper = document.querySelector(this.wrapperClass);
	let headerPlaceholder = document.createElement('div');
	
	let header = document.createElement('div');
	header.className = "ts-calendar__header";
	headerPlaceholder.appendChild(header);
	
	let buttonPrev = document.createElement('button');
	buttonPrev.className = "ts-btn ts-btn_backward-button";
	buttonPrev.innerHTML = "<";
	header.insertBefore(buttonPrev, header.children[0]);
	
	let buttonNext = document.createElement('button');
	buttonNext.className = "ts-btn ts-btn_forward-button";
	buttonNext.innerHTML = ">";
	header.appendChild(buttonNext);	
	
	let title = document.createElement('span');
	title.className = "ts-header__title";
	title.innerHTML = monthName[this.customCalendar.month] + " " + this.customCalendar.year;
	header.insertBefore(title, header.children[1]);	
	
	let dateContainerPlaceholder = document.createElement('div');
	
	let dateContainer = document.createElement('div');
	dateContainer.className = "ts-calendar__date-container";
	dateContainerPlaceholder.appendChild(dateContainer);
	
	let dayNameContainer = document.createElement('div');
	dayNameContainer.className = "ts-calendar__day-name-container";
	dateContainer.appendChild(dayNameContainer);	
    
    for (let i = 0; i < 7; i++) {
		let dayName = document.createElement('div');
		dayName.className = "ts-header__day-names";
		dayName.innerHTML = weekName[i];
        dayNameContainer.appendChild(dayName);
    }
	
    for (let i = 0; i < this.customCalendar.getWeekDay(); i++) { 
		let emptyDate = document.createElement('div');
		emptyDate.className = "ts-calendar-date ts-calendar__empty-date";
		emptyDate.innerHTML = " ";
		//emptyDate.visibility = "hidden";
		dateContainer.appendChild(emptyDate);
    }
    
    for (let i = 0; i < this.customCalendar.daysInMonth(); i++) {
		let dateItem = document.createElement('div');
		dateItem.className = "ts-calendar-date ts-calendar__date-item";
		dateItem.innerHTML = this.customCalendar.date.getDate();
		dateContainer.appendChild(dateItem);
        this.customCalendar.date.setDate(this.customCalendar.date.getDate() + 1);
    }
	
	wrapper.innerHTML = headerPlaceholder.innerHTML + dateContainerPlaceholder.innerHTML;
	return wrapper;
}