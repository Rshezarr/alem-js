function cutFirst(str) {
    let res = ''
    if (str.length <= 2) {
        return res
    }

    for (let i = 2; i <= str.length-1; i++) {
        res += str[i]
    }
    return res
}

function cutLast(str) {
    let res = ''
    if (str.length <= 2) {
        return res
    }

    for (let i = 0; i <= str.length-3; i++) {
        res += str[i]
    }
    return res
}

function cutFirstLast(str) {
    let res = cutFirst(cutLast(str))
    return res
}

function keepFirst(str) {
    let res = ''
    if (str.length == 1) {
        return str
    }
    let l = str.length - (str.length - 1)
    for (let i = 0; i <= l; i++) {
        res += str[i]
    }
    return res
}

function keepLast(str) {
    let res = ''
    if (str.length == 1) {
        return str
    }
    let l = str.length - 2
    for (let i = l; i <= str.length - 1; i++) {
        res += str[i]
    }
    return res
}

function keepFirstLast(str) {
    if (str.length == 2 || str.length == 3) {
        return str
    }
    let res = keepFirst(str) + keepLast(str)
    return res
}

// console.log(keepFirstLast("yoafdyo"))
