const sign = (num) => {
    if (num > 0) {
        return 1
    } else if (num == 0) {
        return 0
    } else {
        return -1
    }
}

const sameSign = (a, b) => {
    let j = sign(a)
    let k = sign(b)
    if (j == k) {
        return true
    }
    return false
}

// console.log(sign(10))
// console.log(sign(-10))
//console.log(sign(0))


// console.log(sameSign(10, -20))