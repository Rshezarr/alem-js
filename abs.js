const isPositive = (num) => {
    if (num > 0) {
        return true
    }
    return false
}

const abs = (num) => {
    if (num < 0) {
        return -num;
    }
    return num;
}

// console.log(isPositive(-10))
// console.log(abs(10))