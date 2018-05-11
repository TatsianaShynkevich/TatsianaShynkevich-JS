function ViewCalendar(wrapperClass, customCalendar) {
    
    this.render = function() {
        renderWrapper();
    }
    
    function renderWrapper() {
        let wrapper = document.querySelector(wrapperClass);    
        wrapper.appendChild(renderHeader(customCalendar));
        wrapper.appendChild(renderDayNameContainer());    
        wrapper.appendChild(renderDateContainer(customCalendar));    
        
        return wrapper;
    }
    
    function removeContainer() {
        document.querySelector('.ts-calendar__header').remove();
        document.querySelector('.ts-calendar__day-name-container').remove();    
        document.querySelector('.ts-calendar__date-container').remove();
    }

    function renderHeader(customCalendar) {
        let header = document.createElement('div');
        header.className = "ts-calendar__header";

        let buttonPrev = document.createElement('button');
        buttonPrev.className = "ts-btn ts-btn_backward-button";
        buttonPrev.innerHTML = "<";
        buttonPrev.addEventListener('click', function() {
            customCalendar.prevMonth();
            removeContainer();
            renderWrapper();
        });
        header.appendChild(buttonPrev);

        let title = document.createElement('span');
        title.className = "ts-header__title";
        title.innerHTML = monthName[customCalendar.month] + " " + customCalendar.year;
        header.appendChild(title);    
        
        let buttonNext = document.createElement('button');
        buttonNext.className = "ts-btn ts-btn_forward-button";
        buttonNext.innerHTML = ">";
        buttonNext.addEventListener('click', function() {
            customCalendar.nextMonth();
            removeContainer();
            renderWrapper();
        });
        header.appendChild(buttonNext);    
        
        return header;
    }

    function renderDayNameContainer() {
        let dayNameContainer = document.createElement('div');
        dayNameContainer.className = "ts-calendar__day-name-container";
        
        for (let i = 0; i < 7; i++) {
            let dayName = document.createElement('div');
            dayName.className = "ts-header__day-names";
            dayName.innerHTML = weekName[i];
            dayNameContainer.appendChild(dayName);
        }
        
        return dayNameContainer;
    }
    
    function renderDateContainer() {
        let dateContainer = document.createElement('div');
        dateContainer.className = "ts-calendar__date-container";
        
        for (let i = 0; i < customCalendar.getWeekDay(); i++) { 
            let emptyDate = document.createElement('div');
            emptyDate.className = "ts-calendar-date ts-calendar__empty-date";
            emptyDate.innerHTML = " ";
            dateContainer.appendChild(emptyDate);
        }
        
        for (let i = 1; i <= customCalendar.daysInMonth(); i++) {
            let dateItem = document.createElement('div');
            dateItem.className = "ts-calendar-date ts-calendar__date-item";
            dateItem.innerHTML = i;
            const today = new Date();
            if(i == today.getDate() && customCalendar.month == today.getMonth() && customCalendar.year == today.getFullYear()) {
                dateItem.className += " ts-calendar-date_today";
            }
            dateContainer.appendChild(dateItem);
        }
        
        return dateContainer;
    }
}