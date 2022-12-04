function isFriday(date) {
    return date.getDay() === 5;
}

function isWeekend(date) {
    return date.getDay() === 6 || date.getDay() === 0;
}

function isLeapYear(date) {
    return (date.getYear() % 4 === 0 && date.getYear() % 100 !== 0) || date.getYear() % 400 === 0;
}

function isLastDayOfMonth(date) {
    const oneDayInMs = 1000 * 60 * 60 * 24;
    return new Date(date.getTime() + oneDayInMs).getDate() === 1;
}

console.log("true == " + isFriday(new Date("2014-08-29")));
console.log("true == " + isFriday(new Date("2020-07-17")));
console.log("false == " + isFriday(new Date("1992-08-26")));
console.log("false == " + isFriday(new Date("2000-08-26")));
console.log("============================================");

console.log("true == " + isWeekend(new Date("2014-09-06")));
console.log("true == " + isWeekend(new Date("2020-05-30")));
console.log("false == " + isWeekend(new Date("1929-02-13")));
console.log("false == " + isWeekend(new Date("1990-01-30")));
console.log("============================================");

console.log("true == " + isLeapYear(new Date("1804-02-01")));
console.log("true == " + isLeapYear(new Date("2008-02-01")));
console.log("true == " + isLeapYear(new Date("2216-02-01")));
console.log("false == " + isLeapYear(new Date("1993-02-01")));
console.log("false == " + isLeapYear(new Date("1999-02-01")));
console.log("============================================");

console.log("true == " + isLastDayOfMonth(new Date("2020-02-29")));
console.log("true == " + isLastDayOfMonth(new Date("2020-12-31")));
console.log("true == " + isLastDayOfMonth(new Date("2019-02-28")));
console.log("true == " + isLastDayOfMonth(new Date("1998-02-28")));
console.log("true == " + isLastDayOfMonth(new Date("1980-02-29")));
console.log("false == " + isLastDayOfMonth(new Date("2020-12-30")));
console.log("false == " + isLastDayOfMonth(new Date("2020-02-28")));
console.log("false == " + isLastDayOfMonth(new Date("2019-02-29")));
