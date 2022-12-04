function isValid(date) {
    if (isNaN(date) || date == 0) {
        return false;
    } else {
        return true;
    }
}

function isAfter(date1, date2) {
    let res = date1 - date2;
    if (res > 0) {
        return true;
    } else {
        return false;
    }
}

function isBefore(date1, date2) {
    let res = date1 - date2;
    if (res < 0) {
        return true;
    } else {
        return false;
    }
}

function isFuture(date) {
    let date1 = new Date();
    let res = date - date1;
    if (res > 0) {
        return true;
    } else {
        return false;
    }
}

function isPast(date) {
    if (!isValid(date)) {
        return false;
    }
    let date1 = new Date();
    let res = date - date1;
    if (res < 0) {
        return true;
    } else {
        return false;
    }
}
