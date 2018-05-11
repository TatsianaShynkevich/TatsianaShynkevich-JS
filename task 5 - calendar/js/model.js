function Calendar(year, month) {
        this.date = new Date(year, month);
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();

        this.getWeekDay = function() {
            return this.date.getDay();
        }

        this.daysInMonth = function() {
            let daysAmount = 32 - new Date(this.year, this.month, 32).getDate()
            return daysAmount;
        }

        this.prevMonth = function() {
            this.month--;
            if (this.month < 0) {
                this.month = 11;
                this.year--;
            }
            this.date = new Date(this.year, this.month);
            return this.date;
        }

        this.nextMonth = function() {
            this.month++;
            if (this.month > 11) {
                this.month = 0;
                this.year++;
            }            
            this.date = new Date(this.year, this.month);
            return this.date;
        }
}