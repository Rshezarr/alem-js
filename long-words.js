function longWords(arr) {
    let res = arr.every(function (word) {
        return word.length >= 5;
    });
    return res;
}

function oneLongWord(arr) {
    let res = arr.some(function (word) {
        return word.length >= 10;
    });
    return res;
}

function noLongWords(arr) {
    let res = arr.every(function (word) {
        return word.length < 7;
    });
    return res;
}

// console.log(longWords(["abcdef", "abe"]));
// console.log(oneLongWord(["abcdef", "123456"]));
// console.log(noLongWords(["abcdef", "1234567"]));
