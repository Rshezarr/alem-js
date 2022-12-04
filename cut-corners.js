const multiply = (a, b) => {
    let flag = true
    if (b < 0) {
        flag = false
        b = -b
    }

    let res = 0
    for (let i = 0; i < b; i++) {
        res += a
    }
    return flag ? res : -res
}

const divide = (a, b) => {
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    }

    let flag = true
    if (a < 0) {
        flag = false;
        a = -a
    }

    if (b < 0) {
        flag = false;
        b = -b
    }

    let res = 0
    for (let c = a; c >= b; c -= b) {
        res ++
    }
    return flag ? res : -res
}

const modulo = (a, b) => {
    let res = a - multiply(b, divide(a, b))

    if (a > 0 && b > 0) {
        return res
    }
    if (a < 0) {
        return res
    }
    if (b < 0) {
        return res
    }
    return res
}

function round(n) {
    let rem
    let res
    let flag = false
    if (n < 0) {
        n = -n
        flag = true
    }

    rem = modulo(n, 1)
    if (rem > 0.5) {
        res = n + 1 - rem
    } else {
        res = n - rem
    }
    if (flag) {
        res = -res
    }
    return res
}

function ceil(n) {
    let res
    let rem = modulo(n, 1)
    if (n > 0 && rem != 0) {
        return res = n + 1 - rem
    } else {
        return res = n - rem
    }
    return n
}

function floor(n) {
    let res
    let rem = modulo(n, 1)
    if (n > 0 && rem != 0) {
        return res = n - rem
    } else if (rem === 0) {
        return n
    } else {
        let x = 1 + rem
        return res = n - x
    }
    return n
}

function trunc(n) {
    let res = parse(modulo(n,10000))
    let res2 = parse(n/10000)
    return res2*10000+res
}

function parse(n) {
    return n^0
}

// console.log(round())
// console.log(ceil(0))
// console.log(floor(0))
// console.log(trunc("sdf"))