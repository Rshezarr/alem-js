function adder(arrNum, x = 0) {
    let res = arrNum.reduce(function (sum, cur) {
        return sum + cur;
    }, x);

    return res;
}
function sumOrMul(arrNum, x = 0) {
    let res = arrNum.reduce(function (sum, cur) {
        if (cur % 2 == 0) {
            return sum * cur;
        }
        return sum + cur;
    }, x);
    return res;
}
function funcExec(func, x) {
    let res = func.reduce(function (sum, cur) {
        return cur(sum);
    }, x);
    return res;
}

// console.log(adder([1, 2, 3, 4, 4]));
// console.log(sumOrMul([18, 17, 7, 13, 25], 12));
// console.log(funcExec());
