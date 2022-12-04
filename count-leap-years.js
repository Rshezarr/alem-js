function isLeapYear(date) {
    return (date % 4 === 0 && date % 100 !== 0) || date % 400 === 0;
}

function countLeapYears(date) {
    let count = 0;
    const year = date.getFullYear();
    for (let i = year; i > 4; i--) {
        if (isLeapYear(i)) {
            count++;
        }
    }
    return count;
}

console.log(countLeapYears(new Date("0001-12-01")) === 0);
console.log(countLeapYears(new Date("1664-08-09")) === 403);
console.log(countLeapYears(new Date("2020-01-01")) === 489);
console.log(countLeapYears(new Date("2048-12-08")) === 496);
