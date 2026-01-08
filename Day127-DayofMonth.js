/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

    const newDate = new Date(year, month - 1, day);  
    
    return days[newDate.getDay()];
};
let day = 18, month = 7, year = 1999
console.log(dayOfTheWeek(day, month, year));
