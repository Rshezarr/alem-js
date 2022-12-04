function groupPrice(str) {
    let arr = str.match(/(\$|USD)[0-9]*\.[0-9]*/g);
    let res = [];
    let temp = [];

    if (arr) {
        arr.forEach((elem) => {
            let num = elem.match(/[0-9]*\.[0-9]*/g).join("");
            temp.push(elem, num.split(".")[0], num.split(".")[1]);
            res.push(temp);
            temp = [];
        });
    }
    return res;
}
