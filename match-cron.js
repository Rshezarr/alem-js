function matchCron(cron, date) {
    let arr = cron.split(" ");
    let minute = arr[0];
    let hour = arr[1];
    let dayOfMonth = arr[2];
    let month = arr[3];
    let dayWeek = arr[4];
    let flag = false;

    if (minute === "*" || minute == date.getMinutes()) {
        flag = true;
    } else {
        return false;
    }

    if (hour === "*" || hour == date.getHours()) {
        flag = true;
    } else {
        return false;
    }

    if (dayOfMonth === "*" || dayOfMonth == date.getDate()) {
        flag = true;
    } else {
        return false;
    }

    if (month === "*" || month == date.getMonth() + 1) {
        flag = true;
    } else {
        return false;
    }

    if (dayWeek === "*") {
        flag = true;
    } else if (dayWeek === 7 && date.getDay === 0) {
        flag = true;
    } else if (date.getDay !== 0 && Number(dayWeek) === date.getDay()) {
        flag = true;
    } else {
        return false;
    }
    return flag;
}

console.log("true == " + matchCron("* * * * 1", new Date("2020-06-01 00:00:00")));
console.log("true == " + matchCron("* * * 2 *", new Date("2021-02-01 00:00:00")));
console.log("true == " + matchCron("* * 9 * *", new Date("2020-06-09 00:00:00")));
console.log("true == " + matchCron("* 3 * * *", new Date("2020-05-31 03:00:00")));
console.log("true == " + matchCron("1 * * * *", new Date("2020-05-30 19:01:00")));
console.log("true == " + matchCron("3 3 * 3 3", new Date("2021-03-03 03:03:00")));
console.log("true == " + matchCron("* * * * *", new Date()));

console.log("false == " + matchCron("* * * * 1", new Date("2020-06-02 00:00:00")));
console.log("false == " + matchCron("* * * 2 *", new Date("2021-03-01 00:00:00")));
console.log("false == " + matchCron("* * 8 * *", new Date("2020-06-09 00:00:00")));
console.log("false == " + matchCron("* 2 * * *", new Date("2020-05-31 03:00:00")));
console.log("false == " + matchCron("1 * * * *", new Date("2020-05-30 19:00:00")));
console.log("false == " + matchCron("3 3 * 3 3", new Date("2021-03-02 03:03:00")));
