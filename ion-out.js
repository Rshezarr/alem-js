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