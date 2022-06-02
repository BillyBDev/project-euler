// 1 represents Monday, 01/01/1900
// 7 represents Sunday
let dayTracker = 1;

const months = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

let year = 1900;
let month = 1;
let day = 1;

console.log(findSundays());

function findSundays(){
    let counter = 0;

    while (year <= 2000){
        while (month <= 12){
            // check for first Sunday
            if (year > 1900 && dayTracker === 7) counter++;
            
            // handle leap years
            let monthLength = months[month]
            if (month === 2){
                // the only century-point we're passing is 2000, which is divisible by 400, so no special logic needed for centuries
                if (year % 4 === 0) monthLength++;
            }

            while (day <= monthLength){
                day++;
                dayTracker++;
                if (dayTracker === 8) dayTracker = 1;
            }
            day = 1;
            month++;
        }
        month = 1;
        year++;
    }

    return counter;
}


// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?


