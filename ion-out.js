function ionOut(str) {
    const regexWord = /tion/g;
    let res = [];
    let strArr = str.split(" ");
    strArr.forEach((elem) => {
        if (elem.match(regexWord) !== null) {
            let cleanElem = elem.replace(/,/, "");
            res.push(cleanElem.replace(regexWord, "t"));
        }
    });

    return res;
}

console.log(ionOut("attention, direction"));
console.log(ionOut("promotion, provision"));
console.log(ionOut("transfusion"));
console.log(ionOut(" 1st position is the vision of the 2nd position"));
