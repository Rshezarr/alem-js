function pyramid(str, num) {
    let l = num - 1
    let res = ''

    for (let j = 1; j <= num; j++) {
        for (let i = 0; i < l; i++) {
            for (let n = 0; n < str.length; n++) {
                res += ' '
            }
        }

        for (let k = 0; k < j; k++) {
            if (k == 0) {
                res += str
                continue
            }
            res += str + str
        }
        l--
        if (j != num) {
            res += '\n'
        }
    }
    return res
}

console.log(pyramid('{}', 12))
console.log(pyramid('#', 12))